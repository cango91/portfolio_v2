import './App.css';
import Header from './components/Header/Header';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? "dark-theme" : ""}`}>
      <Header />
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos perspiciatis ullam, exercitationem eos cumque culpa at odit qui quam iure perferendis possimus tempore ab, sapiente, adipisci molestiae. Minus, exercitationem.</p>
        <p>Esse explicabo facere, est ipsam similique quo harum aliquam at quas quod, unde recusandae fugiat modi necessitatibus maxime dolor quam accusamus asperiores veritatis repudiandae doloribus soluta. Eos architecto corrupti facilis!</p>
        <p>Placeat provident eos obcaecati corrupti magnam, nisi facere quae consectetur mollitia facilis adipisci nemo tempora nulla expedita ipsum sapiente sunt at veritatis laborum vitae? Sit iusto incidunt nam sunt odit?</p>
        <p>Suscipit deserunt cumque aut, sed quidem maxime error, repellat ex dolor reiciendis nam dicta illo provident numquam quibusdam cupiditate! Cumque aperiam tempore sunt ipsa atque neque voluptate earum et sit?</p>
        <p>Iusto cumque iste voluptatum itaque, ducimus perferendis minus animi illum voluptas quo ipsam maxime exercitationem, delectus nobis earum placeat repellat qui dicta fugit nulla facilis tempore nesciunt omnis? Tempora, ipsa!</p>
        <p>Inventore aspernatur nulla consequuntur ullam provident explicabo? Debitis cum esse cumque tenetur ratione sunt sed porro deleniti omnis ipsa nemo iste molestias error, impedit nam deserunt, minima repellendus sint saepe!</p>
        <p>Repellat reiciendis assumenda natus ducimus delectus nostrum, dolorum ab quas quia. Aut adipisci sit corporis, temporibus autem nihil fuga quod, incidunt recusandae harum neque pariatur dicta nam, inventore consectetur fugit.</p>
        <p>Veritatis, numquam inventore sequi esse voluptate, id, eveniet autem laudantium rerum quam reiciendis rem tempore neque. Labore est itaque dolor? Ullam modi odit doloremque laudantium suscipit aspernatur, distinctio quaerat perferendis.</p>
        <p>Iste consequatur aliquid voluptate dolores laborum. Nobis quam, inventore reiciendis dignissimos mollitia praesentium, corrupti odit cum deserunt ratione, cupiditate ipsa? Dolorem molestias provident temporibus est. Alias incidunt quae maiores aliquam.</p>
        <p>Ratione totam soluta quo architecto consectetur praesentium molestiae quasi dignissimos, quis ipsa cupiditate repellendus molestias consequatur debitis est impedit tempore magnam amet officiis reprehenderit obcaecati minima voluptas veniam. Quis, sit.</p>
        <p>Quis error alias in non. Corrupti blanditiis est inventore dolorem, consequatur aperiam magni eveniet porro doloremque recusandae libero quo eos cupiditate ipsa, aspernatur corporis deserunt, autem quia et asperiores? Optio!</p>
        <p>Iste non iure corporis, nobis magni tenetur omnis atque delectus illo corrupti doloremque ad officiis optio consequatur, doloribus ipsam? Nemo ducimus atque aliquid minima neque? Ab quo et iste cumque.</p>
        <p>Quisquam rem, temporibus earum deserunt nihil a vero recusandae, soluta corrupti doloremque architecto maiores quibusdam ipsa assumenda quas ea, veritatis veniam doloribus odio libero enim illo. Nam aliquid suscipit sed?</p>
        <p>Doloribus deleniti dolore explicabo aut dignissimos fugiat asperiores tempora at, ipsa assumenda numquam temporibus dolor quasi molestiae, laborum quas mollitia, accusamus architecto fuga debitis quibusdam. Recusandae libero debitis tempora perferendis.</p>
        <p>Veniam, odit nemo? Dignissimos cum dolor nulla ab id nam alias excepturi pariatur ipsa reprehenderit! Consequuntur dicta deserunt perferendis vero placeat odio laboriosam, quis laudantium sapiente eaque expedita, adipisci nostrum?</p>
        <p>Rerum praesentium necessitatibus, rem voluptates pariatur labore reprehenderit impedit dolor tempora illo, architecto eum veniam! Ipsa quibusdam nostrum quasi? Culpa dolore repellat perferendis corrupti architecto molestiae quae doloribus, deleniti dolores.</p>
        <p>Maxime labore suscipit possimus laborum unde voluptates distinctio odio temporibus cumque iusto. Porro unde quaerat ea minima possimus voluptates officia! Beatae consectetur, ducimus praesentium accusamus enim in voluptates debitis molestiae!</p>
        <p>Ea, quidem est minus, cum quod, maiores quaerat corporis veniam nihil porro tenetur facilis id nam quas dolores beatae pariatur ratione sunt quasi laboriosam atque at natus architecto officia. Quidem!</p>
        <p>Numquam odit fugit sint inventore voluptatibus earum quis, nesciunt a esse repudiandae molestias, ea omnis soluta sunt praesentium non ducimus maiores doloremque. Corporis neque vel temporibus maxime ducimus deleniti dolorem.</p>
        <p>Animi praesentium nesciunt cupiditate, autem similique veritatis magnam, quaerat at accusantium aliquid commodi. Non explicabo totam aut recusandae voluptatibus aliquam fugiat ratione eaque culpa! Aut, consequuntur esse? Soluta, eum tempore.</p>
        <p>Veniam, soluta repellendus perspiciatis enim optio ipsa quia molestias voluptatem, blanditiis debitis dicta, voluptates autem facere laudantium! Porro sequi enim, doloribus laboriosam facilis quia! Exercitationem consequuntur aperiam omnis ipsum quasi?</p>
        <p>Nemo, officia nam velit atque quo animi in, magnam veniam ullam voluptate sunt facilis autem at ea architecto qui, modi possimus a deserunt ducimus eum sint. Voluptatibus quae ea ullam.</p>
        <p>Accusantium, quisquam. Dolor, veniam quos odit placeat quisquam delectus! Est quos hic aliquam officiis eius libero repudiandae eos eveniet blanditiis labore minus consectetur, itaque ut deserunt ratione odio obcaecati praesentium!</p>
        <p>Magnam corrupti totam cumque, quod amet fugit a harum provident necessitatibus doloribus mollitia consequuntur, ea iusto dignissimos. Soluta, beatae quas. Veritatis dolorem nam magnam aliquam? Commodi officiis nesciunt sapiente eligendi.</p>
        <p>Dolor dignissimos quia repudiandae beatae iusto exercitationem delectus excepturi fugit laborum, tempore ipsum illum pariatur sequi molestiae sunt velit blanditiis maxime, alias reprehenderit distinctio quod quam hic vel? Perspiciatis, minus.</p>
        <p>Assumenda, explicabo optio vel ea porro consequuntur, consectetur quia repellat at, nesciunt autem dolor nostrum ipsa voluptas. Hic sit, voluptatibus, ea impedit dicta vitae eius repudiandae, aut quo laudantium repellat.</p>
        <p>Mollitia suscipit perferendis aliquid asperiores consequuntur nam facilis dolores quaerat ipsam eum quos optio quasi ea vel voluptas error ullam, porro libero laborum quod aliquam! Excepturi nemo molestias fugiat eum.</p>
        <p>Quia deserunt provident, cumque laudantium temporibus facilis quasi rerum nulla fugit placeat blanditiis architecto, aliquid eos facere labore quibusdam eum? Veniam excepturi incidunt sapiente, autem itaque quam quos beatae eveniet!</p>
        <p>Maxime cupiditate repellat rerum nisi omnis laudantium in impedit! Vero enim consectetur in assumenda laboriosam est, accusantium porro nostrum adipisci, expedita omnis blanditiis soluta magni. Beatae cum tempora odio quaerat!</p>
        <p>Odit minus necessitatibus ipsa omnis expedita eum, numquam blanditiis excepturi? Tempora, ducimus omnis necessitatibus aut expedita hic non reiciendis distinctio accusantium voluptatum quas quis ipsa! In possimus doloribus fugit ad!</p>
        <p>Amet enim odio ut architecto qui nemo nisi, obcaecati eius aliquid labore exercitationem deleniti unde blanditiis eaque suscipit quisquam temporibus, minima veritatis. Nesciunt doloribus nisi assumenda numquam, voluptate fugit ducimus.</p>
        <p>Odio, labore! Mollitia ex dolore ab obcaecati, earum quo perspiciatis vitae, incidunt quae, assumenda quas sed. Labore temporibus placeat doloremque voluptate, sunt maxime! Totam magnam quasi eius, beatae architecto hic.</p>
        <p>Ab odio reprehenderit itaque expedita quod voluptatibus illo, reiciendis et animi ut, nesciunt tempora corrupti quisquam consequuntur error ea vero numquam optio, nostrum quas dicta saepe? Quas cumque eum vel?</p>
        <p>Nobis odio placeat molestiae beatae animi fugiat eligendi, mollitia distinctio asperiores officia porro dolores pariatur nam vero deserunt sunt magnam sapiente. Laboriosam reprehenderit iure enim laudantium placeat repellat rerum similique?</p>
        <p>Perferendis, nam magnam obcaecati voluptatibus quasi aspernatur, hic modi eligendi quas suscipit quibusdam vel amet veniam saepe illum repellendus impedit omnis, reprehenderit expedita doloremque quos atque cupiditate explicabo accusamus. Vel!</p>
        <p>Deleniti ad temporibus dolor, illum natus facilis vel delectus ducimus? In non a voluptates. Repellat earum optio repudiandae reiciendis quas dolore ea qui pariatur similique quis, itaque quidem unde alias?</p>
        <p>Repellat provident obcaecati voluptate suscipit? Molestias molestiae iure, illo quaerat hic fuga unde itaque laudantium repellat quasi voluptatum minus, officia corrupti est repellendus animi ut minima consequatur ipsam doloremque veritatis!</p>
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
