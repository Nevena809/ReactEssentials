import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item}></CoreConcept>
        ))}
        {/* <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      ></CoreConcept>
      <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
      <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
      <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
      </ul>
    </section>
  );
}

export default CoreConcepts;
