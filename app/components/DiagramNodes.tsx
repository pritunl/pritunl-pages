"use client"

import { Handle, Position, getStraightPath, type NodeTypes, type EdgeTypes, type EdgeProps } from "@xyflow/react"
import {
	Monitor,
	Globe,
	Server,
	Database,
	Router,
	type LucideIcon
} from "lucide-react"

const diagramIcons: Record<string, LucideIcon> = {
	Monitor,
	Globe,
	Server,
	Database,
	Router,
}

function DiagramIcon({ name, className }: { name: string, className?: string }) {
	const Icon = diagramIcons[name]
	if (!Icon) return null
	return <Icon className={className} />
}

function DeviceNode({ data }: { data: Record<string, unknown> }) {
	const delay = (data.delay as number) || 0
	return (
		<div
			className="bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-center"
			style={{
				animation: `diagramFadeIn 0.6s ease-out ${delay}s both, diagramPulse 3s ease-in-out ${delay + 0.6}s infinite`,
			}}
		>
			<Handle type="target" position={Position.Left} className="opacity-0" />
			<Handle type="source" position={Position.Right} className="opacity-0" />
			<Handle id="top" type="source" position={Position.Top} className="opacity-0" />
			<Handle id="top" type="target" position={Position.Top} className="opacity-0" />
			<Handle id="bottom" type="source" position={Position.Bottom} className="opacity-0" />
			<Handle id="bottom" type="target" position={Position.Bottom} className="opacity-0" />
			{data.icon ? <DiagramIcon name={data.icon as string} className="size-10 text-indigo-400 mx-auto mb-1" /> : null}
			<div className="text-base font-semibold text-white">{data.label as string}</div>
			{data.sublabel ? (
				<div className="text-sm text-gray-400 whitespace-pre-line mt-0.5">{data.sublabel as string}</div>
			) : null}
		</div>
	)
}

function CloudNode({ data }: { data: Record<string, unknown> }) {
	const delay = (data.delay as number) || 0
	return (
		<div
			className="px-4 py-3 text-center"
			style={{
				animation: `diagramFadeIn 0.6s ease-out ${delay}s both`,
			}}
		>
			<Handle type="target" position={Position.Left} className="opacity-0" />
			<Handle type="source" position={Position.Right} className="opacity-0" />
			<Handle id="top" type="source" position={Position.Top} className="opacity-0" />
			<Handle id="top" type="target" position={Position.Top} className="opacity-0" />
			<Handle id="bottom" type="source" position={Position.Bottom} className="opacity-0" />
			<Handle id="bottom" type="target" position={Position.Bottom} className="opacity-0" />
			{data.icon ? <DiagramIcon name={data.icon as string} className="size-10 text-indigo-400 mx-auto mb-1" /> : null}
			<div className="text-base font-semibold text-white">{data.label as string}</div>
		</div>
	)
}

function LabelNode({ data }: { data: Record<string, unknown> }) {
	return (
		<div className="text-slate-400 text-sm font-mono">
			{data.label as string}
		</div>
	)
}

function AnimatedEdge({ sourceX, sourceY, targetX, targetY, label }: EdgeProps) {
	const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY })

	return (
		<g>
			<path
				d={path}
				fill="none"
				stroke="#6366f1"
				strokeWidth={2}
				strokeDasharray="6 4"
				style={{ animation: "diagramDash 1s linear infinite" }}
			/>
			<circle r={3} fill="#818cf8">
				<animateMotion dur="2s" repeatCount="indefinite" path={path} />
			</circle>
			<circle r={3} fill="#818cf8">
				<animateMotion dur="2s" repeatCount="indefinite" path={path} begin="1s" />
			</circle>
			{label && (
				<text
					x={labelX}
					y={labelY}
					textAnchor="middle"
					dominantBaseline="middle"
					className="fill-slate-400 text-sm"
				>
					{String(label).split("\n").map((line, i) => (
						<tspan key={i} x={labelX} dy={i === 0 ? 0 : 14}>
							{line}
						</tspan>
					))}
				</text>
			)}
		</g>
	)
}

export const diagramNodeTypes: NodeTypes = {
	device: DeviceNode,
	cloud: CloudNode,
	label: LabelNode,
}

export const diagramEdgeTypes: EdgeTypes = {
	animated: AnimatedEdge,
}
