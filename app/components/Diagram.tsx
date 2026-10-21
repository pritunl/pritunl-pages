"use client"

import { useCallback, useEffect, useRef } from "react"
import {
	ReactFlow,
	Background,
	useReactFlow,
	ReactFlowProvider,
	useNodesState,
	type Node,
	type Edge,
	type OnNodesChange,
} from "@xyflow/react"
import { diagramNodeTypes, diagramEdgeTypes } from "./DiagramNodes"
import "@xyflow/react/dist/style.css"

const EDIT_MODE = false

interface Props {
	nodes: Node[]
	edges: Edge[]
	className?: string
}

function DiagramInnerEdit({ editMode, nodes: initialNodes }: { editMode: boolean, nodes: Node[] }) {
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

	const handleLog = useCallback((nodes: Node[]) => {
		console.log(JSON.stringify(nodes.map(n => ({
			id: n.id,
			position: { x: Math.round(n.position.x), y: Math.round(n.position.y) },
		})), null, 2))
	}, [])

	return (
		<>
			<div ref={containerRef} style={{ display: "none" }} />
			<Background />
			{editMode && (
				<div className="absolute top-2 right-2 z-50">
					<button
						className="bg-indigo-600 text-white text-xs px-3 py-1 rounded"
						onClick={() => {
							const flowEl = containerRef.current?.closest(".react-flow")
							if (!flowEl) return
							handleLog(initialNodes)
						}}
					>
						Log Positions
					</button>
				</div>
			)}
		</>
	)
}

function DiagramEdit({ nodes: initialNodes, edges, className }: Props) {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

	const handleNodesChange: OnNodesChange = useCallback((changes) => {
		onNodesChange(changes)
		setTimeout(() => {
			setNodes(curr => {
				return curr
			})
		}, 0)
	}, [onNodesChange, setNodes])

	return (
		<div className={className}>
			<ReactFlowProvider>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={handleNodesChange}
					nodeTypes={diagramNodeTypes}
					edgeTypes={diagramEdgeTypes}
					fitView
					fitViewOptions={{ padding: 0.05 }}
					proOptions={{ hideAttribution: true }}
					nodesDraggable={true}
					nodesConnectable={false}
					elementsSelectable={true}
					panOnDrag={true}
					zoomOnScroll={true}
					zoomOnPinch={true}
					zoomOnDoubleClick={false}
					preventScrolling={false}
				>
					<DiagramInnerEdit editMode={true} nodes={nodes} />
				</ReactFlow>
			</ReactFlowProvider>
		</div>
	)
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
	if (EDIT_MODE) {
		return DiagramEdit({ nodes, edges, className })
	}

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
