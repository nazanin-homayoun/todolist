import { useState } from "react";
import { Plus } from "lucide-react";

export default function App() {
	const [status, setStatus] = useState("Completed");
	const [group, setGroup] = useState("default");

	return (
		<>
			<header className="flex justify-between bg-[#C5BAFF] py-5 px-6 shadow-md">
				<h1 className="text-white font-bold text-4xl md:text-5xl tracking-wide">
					ToDo
				</h1>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/5d/GNOME_Todo_icon_2019.svg"
					alt="GNOME Todo Icon"
					className="w-12 h-12 md:w-14 md:h-14"
				/>
			</header>
			<main className="px-6 py-10">
				<div className="flex flex-col md:flex-row md:justify-between gap-6">
					{/* Filters */}
					<div className="flex gap-x-4 flex-col sm:flex-row">
						{/* Status Dropdown */}
						<div>
							<label className="block font-semibold text-gray-700 mb-2 text-lg">
								Status
							</label>
							<select
								className="border-2 border-gray-400 rounded-lg px-4 py-2 w-44 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
								value={status}
								onChange={(e) => setStatus(e.target.value)}
							>
								<option value="All">Completed</option>
								<option value="Active">Pending</option>
								<option value="Completed">In Progress</option>
							</select>
						</div>

						{/* Group Dropdown */}
						<div>
							<label className="block font-semibold text-gray-700 mb-2 text-lg">
								Group
							</label>
							<select
								className="border-2 border-gray-400  rounded-lg px-4 py-2 w-44 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
								value={group}
								onChange={(e) => setGroup(e.target.value)}
							>
								<option value="Default">Default</option>
								<option value="Admin">All Group</option>
							</select>
						</div>
					</div>
					{/* Add */}
					<div>
						<div className="flex flex-col sm:flex-row gap-4">
							{/* Add Task Button */}
							<button className="flex items-center hover:bg-[#C5BAFF] hover:text-white transition-colors duration-700 gap-2 border-[#C5BAFF] px-4 py-2 rounded-md shadow-xl h-10">
								<Plus size={18} />
								<span className="text-lg">Add Task</span>
							</button>

							{/* Add Group Button */}
							<button className="flex items-center hover:bg-[#C5BAFF] hover:text-white transition-colors duration-700 gap-2 border-[#C5BAFF] px-4 py-2 rounded-md shadow-xl h-10">
								<Plus size={16} />
								<span className="text-lg">Add Group</span>
							</button>
						</div>
					</div>
				</div>
				<div></div>
			</main>
		</>
	);
}
