"use client"

import { useEffect, useRef } from "react"
import {
	ReactFlow,
	Background,
	useReactFlow,
	ReactFlowProvider,
	type Node,
	type Edge,
} from "@xyflow/react"
import { diagramNodeTypes, diagramEdgeTypes } from "./DiagramNodes"
import "@xyflow/react/dist/style.css"

interface Props {
	nodes: Node[]
	edges: Edge[]
	className?: string
}

function DiagramInner() {
	const { fitView } = useReactFlow()
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const el = containerRef.current?.closest(".react-flow") as HTMLElement | null
		if (!el) return
		const observer = new ResizeObserver(() => {
			fitView({ padding: 0.05 })
		})
		observer.observe(el)
		return () => observer.disconnect()
	}, [fitView])

	return (
		<>
			<div ref={containerRef} style={{ display: "none" }} />
			<Background />
		</>
	)
}

export default function Diagram({ nodes, edges, className }: Props) {
	return (
		<div className={className}>
			<ReactFlowProvider>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					nodeTypes={diagramNodeTypes}
					edgeTypes={diagramEdgeTypes}
					fitView
					fitViewOptions={{ padding: 0.05 }}
					proOptions={{ hideAttribution: true }}
					nodesDraggable={false}
					nodesConnectable={false}
					elementsSelectable={false}
					panOnDrag={false}
					zoomOnScroll={false}
					zoomOnPinch={false}
					zoomOnDoubleClick={false}
					preventScrolling={false}
				>
					<DiagramInner />
				</ReactFlow>
			</ReactFlowProvider>
		</div>
	)
}
