// import { experience } from "@/data/portfolio";
// import SectionTitle from "./SectionTitle";
// import Timeline from "./Timeline";

// export default function Experience() {
//   if (experience.length === 0) return null;

//   return (
//     <section id="experience" className="bg-surface/40 py-16 sm:py-24">
//       <div className="mx-auto max-w-3xl px-4 sm:px-6">
//         <SectionTitle title="Experience" subtitle="Amar professional journey" />
//         <Timeline
//           items={experience.map((e) => ({
//             title: e.role,
//             subtitle: e.company,
//             period: e.period,
//             body: (
//               <ul className="list-disc space-y-1 pl-5">
//                 {e.points.map((p) => (
//                   <li key={p}>{p}</li>
//                 ))}
//               </ul>
//             ),
//           }))}
//         />
//       </div>
//     </section>
//   );
// }
