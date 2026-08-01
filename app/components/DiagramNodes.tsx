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

export const diagramNodeTypes: NodeTypes = {
	device: DeviceNode,
}
