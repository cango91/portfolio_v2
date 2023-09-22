import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import TechStack from './components/TechStack/TechStack';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const [filters, setFilters] = useState([]);
  const { theme } = useTheme();

  const onFilterChanged = filters =>{
    setFilters(filters);
  }

  return (
    <div className={`app ${theme === 'dark' ? "dark-theme" : ""}`}>
      <Header />
      <main>
        <section id="About">
          <About />
        </section>
        
        <section id="TechStack">
          <TechStack onFilterChanged={onFilterChanged} selectedTechs={filters} />
        </section>
        <p>Nobis odio placeat molestiae beatae animi fugiat eligendi, mollitia distinctio asperiores officia porro dolores pariatur nam vero deserunt sunt magnam sapiente. Laboriosam reprehenderit iure enim laudantium placeat repellat rerum similique?</p>
        <p>Perferendis, nam magnam obcaecati voluptatibus quasi aspernatur, hic modi eligendi quas suscipit quibusdam vel amet veniam saepe illum repellendus impedit omnis, reprehenderit expedita doloremque quos atque cupiditate explicabo accusamus. Vel!</p>
        <p>Deleniti ad temporibus dolor, illum natus facilis vel delectus ducimus? In non a voluptates. Repellat earum optio repudiandae reiciendis quas dolore ea qui pariatur similique quis, itaque quidem unde alias?</p>
        <p>Repellat provident obcaecati voluptate suscipit? Molestias molestiae iure, illo quaerat hic fuga unde itaque laudantium repellat quasi voluptatum minus, officia corrupti est repellendus animi ut minima consequatur ipsam doloremque veritatis!</p>
        <section id="Projects">
          
        </section>

        <section id="Contact">
          
        </section>
        <p>Beatae dolor ullam facere non ducimus, voluptates pariatur dignissimos corporis, magni quidem natus veritatis sequi! Assumenda eligendi debitis maiores alias a commodi labore! Harum repellendus eum sit temporibus, modi nesciunt?</p>
        <p>Architecto, exercitationem libero. Saepe dignissimos quidem dolore doloribus voluptatibus quasi illum, debitis distinctio nihil, dolorem nisi nobis suscipit voluptate harum. Fuga quod vel magnam harum eligendi iure, a ut dolores.</p>
        <p>Quos necessitatibus accusamus magnam repellat fugit facere beatae nostrum qui laboriosam, ad incidunt atque. Deleniti quidem quaerat non dolore expedita maiores modi recusandae sunt sint, ut, sit, beatae unde autem?</p>
        <p>Numquam iure maiores molestiae perspiciatis cumque? Officiis quo, a modi temporibus expedita veniam iure ullam non incidunt repellendus tenetur vel recusandae porro ipsa esse hic odit iste libero illum magnam.</p>
        <p>Amet, totam repudiandae magnam numquam ipsum illum. Maxime tenetur distinctio incidunt cumque ullam velit voluptates sequi officiis error, quia pariatur minus. Porro, inventore vitae tempore accusantium dolores est illo. Omnis.</p>
        <p>Eligendi natus eum, aliquam consequuntur neque quo iure, dicta perspiciatis numquam recusandae voluptates obcaecati dolor ipsam minima maiores soluta assumenda quidem temporibus quasi aliquid error delectus! Explicabo reprehenderit recusandae dignissimos.</p>
        <p>Aut iusto et ipsam repudiandae fugit iste expedita similique eum quaerat non ducimus vitae fugiat dolore, assumenda eligendi beatae explicabo ex odit eos architecto cupiditate. Reprehenderit sint nihil minima voluptatibus?</p>
        <p>Deserunt ipsam ad, quisquam voluptates incidunt atque voluptatem placeat expedita, numquam impedit consectetur explicabo soluta debitis nesciunt perspiciatis esse quam. Consequatur mollitia natus enim nostrum velit sequi impedit incidunt molestiae?</p>
        <p>Natus nulla expedita cum reiciendis tenetur laborum labore vitae? Porro obcaecati deleniti magni libero itaque nostrum aliquid pariatur ex modi architecto, voluptatibus corrupti ipsum. Fuga dolor delectus tempore fugiat laudantium.</p>
        <p>Eveniet distinctio qui facilis ex debitis labore nisi! Eos dolore quaerat omnis asperiores sed eveniet, excepturi nesciunt laudantium. Vero quis molestiae, nam eaque sunt architecto? Sint similique necessitatibus sequi ea?</p>
        <p>Laborum aut blanditiis accusantium possimus consequuntur, aperiam voluptatum libero quam eligendi, ipsa porro accusamus, explicabo velit sapiente voluptatem quas. Corrupti, at suscipit quam dolor saepe vitae voluptatem cumque doloremque optio!</p>
        <p>Autem quidem harum facere! Eum maiores quis minus nobis. Necessitatibus ad, molestiae, a excepturi doloremque totam laboriosam debitis voluptatem dolor voluptas non dolorum architecto nostrum accusantium molestias officia obcaecati assumenda!</p>
        <p>Voluptatibus quae modi commodi quam, ex molestiae, fugit nemo ullam dolor neque expedita nihil quo ipsum minima dolorum facilis veritatis rerum reiciendis provident a, earum mollitia distinctio velit repellendus. Nihil.</p>
      </main>
    </div>
  );
}
