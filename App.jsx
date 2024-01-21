import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from './data'
import { EXAMPLES } from './data';
import TabButton from './TabButton.jsx';


function App() {

  const [selectedTopitc, setSelectedTopic] = useState()
  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  let tabContent = (<p>Please select a topic.</p>)
  if (selectedTopitc) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopitc].title}</h3>
      <p>{EXAMPLES[selectedTopitc].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopitc].code}</code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}

          </ul>
        </section>
        <section id="examples">
          <h2>Exemples</h2>
          <menu>
            <TabButton isSelected={selectedTopitc === 'components'} onSelect={() => handelSelect("components")}>Component</TabButton>
            <TabButton isSelected={selectedTopitc === 'jsx'} onSelect={() => handelSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopitc === 'props'} onSelect={() => handelSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopitc === 'state'} onSelect={() => handelSelect("state")}>State</TabButton>
          </menu>
          {/* {!selectedTopitc && <p>Please select a topic.</p>}
          {selectedTopitc && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopitc].title}</h3>
              <p>{EXAMPLES[selectedTopitc].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopitc].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
