import {
  LayoutGrid,
  LayoutList,
  Menu,
  Search,
  type LucideIcon,
  type LucideProps,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { type IconBaseProps, type IconType } from "react-icons";

export type Icon = IconType | LucideIcon;

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="14.982 11.163 69.889 77.703"
      {...props}
    >
      <path d="M51.6538086,28.1445313c-7.5268555-0.3359375-13.2329102,1.6064453-16.9619141,5.7529297  c-6.1152344,6.7998047-4.6630859,16.9794922-4.5947266,17.4306641c0.0161133,0.0888672,1.5981445,8.8837891,1.9438477,13.3496094  c0.0317383,0.4140625,0.387207,0.7119141,0.8056641,0.6904297c0.4125977-0.0322266,0.7216797-0.3925781,0.6894531-0.8056641  c-0.3510742-4.5419922-1.8969727-13.1367188-1.9589844-13.4785156c-0.0151367-0.0986328-1.4165039-9.9042969,4.2304688-16.1835938  c3.4145508-3.796875,8.7202148-5.5664063,15.8110352-5.2568359c0.0791016,0,7.9594727,0.1386719,12.9594727,9.8330078  c0.2470703,0.5537109,5.9321289,13.6660156-4.7407227,22.6123047c-0.0332031,0.0253906-3.4106445,2.5771484-9.9433594,7.1591797  c-0.1352539,0.078125-3.1069336,1.84375-4.6665039,5.7646484c-1.5353394-0.9714966-4.7870483-2.862915-7.9887695-3.718811  c1.3361206-2.7710571,5.2855225-11.5308838,5.5185547-18.7216187c0.9243164-0.1767578,1.9174805-0.46875,2.9775391-0.8759766  c0.2045898-0.0800781,0.8959961-0.359375,1.7749023-0.7949219c0.4858398,1.1445313,1.2617188,2.4287109,2.4697266,3.8105469  c1.3266602,1.7773438,4.7548828,4.65625,8.2587891,2.8046875c0.1489258-0.0830078,1.4624023-0.8564453,1.7026367-2.1611328  c0.0878906-0.4785156,0.0571289-1.2080078-0.5698242-2c-0.5615234-1.0849609-2.2563477-2.7587891-4.965332-1.8291016  c-0.3920898,0.1347656-0.6010742,0.5605469-0.4667969,0.953125c0.1337891,0.3916016,0.5615234,0.5996094,0.9521484,0.4667969  c2.1665039-0.7402344,3.0742188,0.9492188,3.168457,1.1396484c0.0268555,0.0566406,0.0610352,0.109375,0.1010742,0.1582031  c0.3745117,0.4492188,0.3227539,0.7402344,0.3051758,0.8359375c-0.09375,0.5244141-0.7451172,1.0039063-0.9453125,1.1201172  c-3.2163086,1.6953125-6.2133789-2.2177734-6.375-2.4296875c-1.1655273-1.3349609-1.8793945-2.5410156-2.3051758-3.5820313  c1.7597656-1.0205078,3.6674805-2.4755859,4.0317383-4.1269531c0.21875-0.6376953,0.2929688-1.8642578-0.78125-2.7480469  c-0.0512695-0.0361328-1.2792969-0.8574219-2.6616211-0.4150391c-1.0151367,0.3212891-1.7988281,1.1982422-2.3100586,2.5605469  c-0.0454102,0.0996094-0.7036133,1.6152344-0.0961914,4.0078125c-0.6499023,0.3320313-1.2836914,0.6162109-1.8305664,0.8310547  c-0.8671875,0.3330078-1.6845703,0.5810547-2.4448242,0.7431641c-0.065918-1.3486328-0.2900391-2.6171875-0.7192383-3.7490234  c-0.0239258-0.1015625-0.6181641-2.4892578-3.6826172-3.1142578c-0.0673828-0.0048828-1.730957-0.1425781-2.6918945,1.0625  c-0.7431641,0.9316406-0.8198242,2.3251953-0.2426758,4.0878906c0.0175781,0.0722656,0.4550781,1.7890625,2.3378906,2.7753906  c0.9780273,0.5107422,2.1450195,0.7324219,3.4868164,0.6601563c-0.324646,7.109314-4.4486084,16.0206299-5.5111694,18.2091064  c-1.762085-0.2662354-3.4216309-0.1134033-4.663147,0.8221436c-0.2211914,0.1660156-0.3325195,0.4414063-0.2895508,0.7148438  s0.2329102,0.5009766,0.4946289,0.5917969c0.0820313,0.0292969,8.0483398,2.8251953,11.6162109,6.4570313  c-0.2675781,0.1416016-1.4423828,0.484375-5.5532227-0.8554688c-1.3271484-0.4462891-5.7695313-1.8359375-7.2626953-1.0117188  c-0.3852539,0.2128906-0.5522461,0.5126953-0.6235352,0.7490234c-0.0883789,0.2275391-0.2231445,0.7695313,0.0981445,1.4785156  c0.7368164,1.6210938,3.3955078,3.0078125,7.9077148,4.1210938c0.4238281,0.1015625,0.9116211,0.3183594,1.0957031,0.4785156  c-0.0532227,0.0595703-0.1567383,0.1572266-0.3544922,0.2929688c-0.0454102,0.0351563-1.1289063,0.8544922-2.9731445,0.7080078  c-0.1669922-0.0273438-4.0854492-0.6347656-5.5224609,1.9121094c-0.2036133,0.3603516-0.0756836,0.8183594,0.284668,1.0214844  c0.1166992,0.0654297,0.2431641,0.0966797,0.3681641,0.0966797c0.2617188,0,0.5161133-0.1376953,0.6538086-0.3818359  c0.9067383-1.6074219,3.9453125-1.171875,4.0322266-1.1611328c2.5439453,0.2128906,4.0336914-0.9755859,4.0463867-0.9892578  c0.7714844-0.5253906,1.1040039-1.1132813,0.987793-1.7460938c-0.2050781-1.1132813-1.7885742-1.5751953-2.2641602-1.6894531  c-5.2636719-1.2988281-6.5371094-2.6533203-6.840332-3.1757813c-0.1469727-0.2529297-0.1147461-0.4248047-0.1401367-0.3828125  c0.0078125-0.0146484,0.0146484-0.0302734,0.0209961-0.0449219c0.6318359-0.2568359,3.3725586,0.2607422,6.0136719,1.1484375  c3.9125977,1.2753906,6.1826172,1.4169922,7.1479492,0.453125c0.4858398-0.4853516,0.5083008-1.1171875,0.3798828-1.5107422  c-0.0332031-0.1015625-0.0874023-0.1953125-0.159668-0.2744141c-2.6835938-2.9287109-7.8579102-5.2890625-10.6254883-6.4082031  c3.5268555-0.4091797,9.3286133,2.8554688,11.5932617,4.3964844c0.1962891,0.1347656,0.4438477,0.1660156,0.6689453,0.0878906  c0.2246094-0.078125,0.3984375-0.2587891,0.4692383-0.4853516c1.2416992-3.9931641,4.2871094-5.8242188,4.3696289-5.875  c6.6083984-4.6318359,10.0073242-7.2011719,10.0703125-7.2490234c11.5805664-9.7060547,5.2402344-24.2529297,5.1572266-24.4355469  C60.4985352,28.2939453,51.9833984,28.1445313,51.6538086,28.1445313z M48.503418,46.0341797  c0.2460938-0.6533203,0.6835938-1.4794922,1.3686523-1.703125c0.1386719-0.0449219,0.2768555-0.0625,0.409668-0.0625  c0.5244141,0,0.9243164,0.2607422,0.9125977,0.2451172c0.4746094,0.3955078,0.2749023,1.0166016,0.253418,1.078125  c-0.0151367,0.0390625-0.0263672,0.0791016-0.034668,0.1201172c-0.1948242,0.9833984-1.515625,2.0791016-3.0244141,2.9951172  C48.0693359,47.0957031,48.4648438,46.1259766,48.503418,46.0341797z M38.4765625,50.7910156  c-1.2890625-0.6601563-1.5976563-1.7783203-1.6240234-1.8730469c-0.418457-1.2832031-0.4291992-2.2294922-0.0307617-2.7363281  c0.4375-0.5566406,1.3261719-0.5136719,1.3095703-0.5214844c2.0117188,0.4160156,2.4223633,1.9189453,2.465332,2.0693359  c0.3984375,1.0517578,0.5991211,2.2460938,0.6479492,3.5253906C40.1479492,51.3251953,39.21875,51.1699219,38.4765625,50.7910156z" />
      <path d="M47.3774414,58.0146484c-1.2182617,1.2119141-3.4755859,4.9091797-6.7094727,10.9902344  c-0.1943359,0.3662109-0.0556641,0.8203125,0.3100586,1.0146484c0.1123047,0.0595703,0.2324219,0.0878906,0.3515625,0.0878906  c0.2680664,0,0.527832-0.1445313,0.6625977-0.3974609c3.074707-5.78125,5.362793-9.5576172,6.4428711-10.6328125  c0.2939453-0.2919922,0.2949219-0.7666016,0.0029297-1.0605469C48.1455078,57.7226563,47.6699219,57.7207031,47.3774414,58.0146484z  " />
      <path d="M31.7851563,27.2294922c0.1376953,0,0.2768555-0.0380859,0.4018555-0.1171875  c0.3496094-0.2216797,0.4526367-0.6855469,0.230957-1.0351563c-0.0878906-0.1376953-2.1821289-3.4082031-4.8881836-5.2197266  c-0.3442383-0.2304688-0.8095703-0.1396484-1.0405273,0.2060547c-0.2304688,0.34375-0.1386719,0.8095703,0.2055664,1.0400391  c2.4399414,1.6337891,4.4370117,4.7470703,4.4570313,4.7783203C31.2949219,27.1064453,31.5375977,27.2294922,31.7851563,27.2294922z  " />
      <path d="M46.9672852,20.5683594c0.4033203,0,0.7363281-0.3203125,0.7490234-0.7265625l0.2407227-7.6181641  c0.0131836-0.4140625-0.3120117-0.7597656-0.7255859-0.7734375c-0.3974609,0.0322266-0.7602539,0.3125-0.7734375,0.7265625  l-0.2407227,7.6181641c-0.0131836,0.4140625,0.3120117,0.7597656,0.7255859,0.7734375  C46.9511719,20.5683594,46.9589844,20.5683594,46.9672852,20.5683594z" />
      <path d="M60.9716797,24.3134766c0.2949219,0,0.5742188-0.1748047,0.6938477-0.4638672l3.4106445-8.2626953  c0.1577148-0.3828125-0.0244141-0.8212891-0.4072266-0.9794922c-0.3823242-0.1552734-0.8212891,0.0253906-0.9794922,0.4072266  l-3.4106445,8.2626953c-0.1577148,0.3828125,0.0244141,0.8212891,0.4072266,0.9794922  C60.7797852,24.2949219,60.8764648,24.3134766,60.9716797,24.3134766z" />
      <path d="M70.9628906,33.0546875c0.1181641,0,0.237793-0.0273438,0.3496094-0.0869141  c1.409668-0.7441406,5.4663086-2.6191406,7.265625-2.3847656c0.4130859,0.0644531,0.7880859-0.234375,0.8417969-0.6445313  c0.0541992-0.4111328-0.2348633-0.7880859-0.6455078-0.8417969c-2.5966797-0.3466797-7.5996094,2.2480469-8.1621094,2.5449219  c-0.3662109,0.1933594-0.5063477,0.6464844-0.3129883,1.0126953C70.4335938,32.9091797,70.6938477,33.0546875,70.9628906,33.0546875  z" />
      <path d="M83.6362305,44.9833984c-0.050293,0.0058594-5.0361328,0.5253906-7.378418,0.2695313  c-0.4160156-0.0585938-0.7822266,0.2509766-0.8276367,0.6630859s0.2519531,0.7822266,0.6635742,0.8271484  c0.5200195,0.0576172,1.1474609,0.0800781,1.8173828,0.0800781c2.5507813,0,5.715332-0.3300781,5.8823242-0.3476563  c0.4121094-0.0439453,0.7109375-0.4130859,0.6669922-0.8251953C84.4169922,45.2392578,84.0419922,44.9384766,83.6362305,44.9833984z  " />
      <path d="M24.3139648,39.9179688c-2.800293-0.3642578-7.7895508-1.6621094-7.8393555-1.6748047  c-0.4047852-0.1064453-0.8110352,0.1357422-0.9150391,0.5361328c-0.1044922,0.4003906,0.1352539,0.8105469,0.5361328,0.9150391  c0.2080078,0.0546875,5.1303711,1.3349609,8.0249023,1.7119141c0.0327148,0.0039063,0.0654297,0.0058594,0.0976563,0.0058594  c0.3710938,0,0.6933594-0.2753906,0.7426758-0.6533203C25.0146484,40.3486328,24.7246094,39.9716797,24.3139648,39.9179688z" />
      <path d="M72.8857422,62.9482422c-1.2832031-0.7900391-2.7177734-0.9726563-2.7783203-0.9794922  c-0.4091797-0.0507813-0.7836914,0.2412109-0.8339844,0.6513672c-0.0512695,0.4101563,0.2402344,0.7851563,0.6503906,0.8369141  c0.0117188,0.0019531,1.1787109,0.1552734,2.1240234,0.734375l3.6831055,2.7109375  C75.8652344,67,76.0209961,67.0478516,76.175293,67.0478516c0.2299805,0,0.4575195-0.1054688,0.6044922-0.3056641  c0.2456055-0.3330078,0.1743164-0.8027344-0.1591797-1.0488281L72.8857422,62.9482422z" />
    </svg>
  ),
  logInIcon: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57.348"
      height="57.348"
      viewBox="1377.023 392.842 57.348 57.348"
      {...props}
    >
      <g data-name="log-in">
        <path
          d="M41.027.036C40.967.03 40.917 0 40.855 0H15.168C11.216 0 8 3.216 8 7.168v2.39a2.39 2.39 0 0 0 4.779 0v-2.39a2.393 2.393 0 0 1 2.39-2.389H26.3l-.729.244a4.804 4.804 0 0 0-3.235 4.535V45.4h-7.169a2.393 2.393 0 0 1-2.389-2.39v-4.778a2.39 2.39 0 0 0-4.779 0v4.779c0 3.952 3.216 7.168 7.168 7.168h7.169v2.39a4.784 4.784 0 0 0 4.779 4.779c.511 0 .996-.074 1.522-.237l14.356-4.786a4.803 4.803 0 0 0 3.238-4.535V4.779c0-2.786-2.402-4.97-5.205-4.743Z"
          fill-rule="evenodd"
          fill='url("#a")'
          transform="translate(1388.14 392.842)"
          data-name="Path 702"
        />
        <path
          d="M25.584 15.258 16.026 5.7a2.39 2.39 0 0 0-4.079 1.69v7.168H2.39a2.39 2.39 0 0 0 0 4.78h9.558v7.168a2.39 2.39 0 0 0 4.079 1.69l9.558-9.559a2.387 2.387 0 0 0 0-3.379Z"
          fill-rule="evenodd"
          fill='url("#b")'
          transform="translate(1377.023 399.79)"
          data-name="Path 703"
        />
      </g>
      <defs>
        <linearGradient x1="-.246" y1="-.073" x2="1.215" y2=".955" id="a">
          <stop stop-color="#9600ce" offset="0" />
          <stop stop-color="#b902b3" offset="1" />
        </linearGradient>
        <linearGradient x1="-.246" y1="-.073" x2="1.215" y2=".955" id="b">
          <stop stop-color="#9600ce" offset="0" />
          <stop stop-color="#b902b3" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  ),
  search: Search,
  menu: Menu,
  layoutGrid: LayoutGrid,
  layoutList: LayoutList,
  leftArrow: ChevronLeft,
  rightArrow: ChevronRight,
};
