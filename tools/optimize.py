import os
import sys
import subprocess
import threading
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor

ASSETS_DIR = "./app/assets"
CONCURRENCY = max(1, os.cpu_count() // 4)
FORCE = "--force" in sys.argv
print_lock = threading.Lock()

def find_images(directory: str) -> list[Path]:
    return sorted(Path(directory).rglob("*.png"))

def encode_avif(file: Path) -> None:
    output = file.with_suffix(".avif")

    if not FORCE and output.exists():
        with print_lock:
            print(f"{file} -> {output}  (skipped)")
        return

    subprocess.run(
        [
            "avifenc",
            "-q", "50",
            "--speed", "0",
            "-y", "444",
            "--tilerowslog2", "0",
            "--tilecolslog2", "0",
            "-j", "4",
            str(file),
            str(output),
        ],
        capture_output=True,
    )

    original_size = file.stat().st_size
    avif_size = output.stat().st_size
    reduction = ((original_size - avif_size) / original_size) * 100

    with print_lock:
        print(
            f"{file} -> {output}"
            f"  ({original_size / 1024:.0f}KB"
            f" -> {avif_size / 1024:.0f}KB,"
            f" -{reduction:.1f}%)"
        )

def encode_webp(file: Path) -> None:
    output = file.with_suffix(".webp")

    if not FORCE and output.exists():
        with print_lock:
            print(f"{file} -> {output}  (skipped)")
        return

    subprocess.run(
        [
            "cwebp",
            "-q", "80",
            "-m", "6",
            str(file),
            "-o", str(output),
        ],
        capture_output=True,
    )

    original_size = file.stat().st_size
    webp_size = output.stat().st_size
    reduction = ((original_size - webp_size) / original_size) * 100

    with print_lock:
        print(
            f"{file} -> {output}"
            f"  ({original_size / 1024:.0f}KB"
            f" -> {webp_size / 1024:.0f}KB,"
            f" -{reduction:.1f}%)"
        )

def optimize_image(file: Path) -> None:
    encode_avif(file)
    encode_webp(file)

def main() -> None:
    files = find_images(ASSETS_DIR)

    if not files:
        print(f"No PNG files found in {ASSETS_DIR}")
        return

    print(f"Found {len(files)} PNG files")
    print(f"Processing with {CONCURRENCY} workers (4 threads each)\n")

    with ThreadPoolExecutor(max_workers=CONCURRENCY) as pool:
        pool.map(optimize_image, files)

    print("\nImage Optimize Complete")

if __name__ == "__main__":
    main()
