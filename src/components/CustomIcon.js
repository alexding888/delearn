import Icon from '@ant-design/icons';


export default function CustomIcon(props) {

    const { type, className } = props;

    const wechat = (
      <svg t="1701682936461" className={className||`icon`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9699" width="1em" height="1em">
        <path d="M1024.16 694.816c0-149.92-143.104-271.392-319.584-271.392-176.576 0-319.68 121.504-319.68 271.392S528 966.208 704.576 966.208c55.456 0 107.648-12.096 153.184-33.248l125.984 54.528-14.592-140.544c34.784-43.392 55.04-95.808 55.04-152.128zM596.832 621.28c-25.152 0-45.472-20.352-45.472-45.472s20.32-45.472 45.472-45.472c25.12 0 45.44 20.384 45.44 45.472s-20.384 45.472-45.44 45.472z m215.392 0c-25.056 0-45.44-20.352-45.44-45.472s20.384-45.472 45.44-45.472c25.184 0 45.536 20.384 45.536 45.472s-20.352 45.472-45.536 45.472zM704.576 387.488c49.376 0 96.416 8.8 139.264 24.64 0.32-5.728 0.992-11.232 0.992-16.992 0-198.08-189.152-358.624-422.432-358.624C189.184 36.512 0.032 197.024 0.032 395.136c0 74.496 26.816 143.776 72.704 201.12L53.472 781.92l166.432-72.096c41.216 19.2 86.784 32.16 134.88 38.784-3.616-17.504-5.824-35.424-5.824-53.792 0.032-169.44 159.552-307.296 355.616-307.296z m-139.808-209.6c33.184 0 60 26.88 60 60 0 33.184-26.816 60.064-60 60.064s-60.032-26.88-60.032-60.064c0-33.152 26.88-60 60.032-60zM280.032 297.952c-33.184 0-60-26.88-60-60.064 0-33.152 26.848-60 60-60 33.184 0 60.032 26.88 60.032 60s-26.88 60.064-60.032 60.064z" fill="#00C763" p-id="9902"></path>
      </svg>
    )

    const discord = (
      <svg t="1684894551458" className={className||`icon`} viewBox="0 0 1280 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1781" width="1em" height="1em">
        <path d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z" p-id="1782"></path>
      </svg>
    )

    const close = (
      <svg t="1684895009348" className={className||`icon`} viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2384" width="1em" height="1em">
        <path d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z" p-id="2385"></path>
      </svg>
    )
    const share = (
      <svg t="1684895072216" className={className||`icon`} viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="943" width="1em" height="1em">
        <path d="M384 64a64 64 0 1 1 0 128H192a32 32 0 0 0-32 32v608a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32v-160a64 64 0 1 1 128 0v160a160 160 0 0 1-160 160H192a160 160 0 0 1-160-160V224a160 160 0 0 1 160-160z m416 32l224 208-224 208v-118.144l-47.2 1.152a576.992 576.992 0 0 0-491.2 298.56L256 704l45.44-145.408A512 512 0 0 1 788.8 199.296l11.2 0.096V96z" fill="#4B4B4B" p-id="944"></path>
      </svg>
    )
    const arrow = (
      <svg t="1684894551458" className={className||`icon`} viewBox="0 0 1280 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1781" width="1em" height="1em">
        <path d="M512 625.664L131.584 245.248c-28.16-28.16-73.216-28.16-101.376 0s-28.16 73.216 0 101.376l420.864 420.864c2.56 4.096 5.632 7.68 9.216 11.264 14.336 14.336 32.768 21.504 51.712 20.992 18.432 0 37.376-6.656 51.712-20.992 3.584-3.584 6.656-7.168 9.216-11.264l420.864-420.864c13.824-13.824 20.992-32.256 20.992-50.688 0-18.432-7.168-36.864-20.992-50.688-28.16-28.16-73.216-28.16-101.376 0L512 625.664z" p-id="1918"></path>
      </svg>
    )
    const search = (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="&#231;&#180;&#160;&#230;&#157;&#144;">
        <rect width="1348" height="1391" transform="translate(-68 -914)" fill="white"/>
        <g id="Group 319">
        <circle id="Ellipse 2" cx="7" cy="7" r="6" stroke="black" strokeOpacity="0.5" strokeWidth="1.5"/>
        <path id="Vector 3" d="M11.5 11.5L15 15" stroke="black" strokeOpacity="0.5" strokeWidth="1.5"/>
        </g>
        </g>
      </svg>
    )
    

    const icons = {
      "icon-discord": discord,
      "icon-close": close,
      "icon-share": share,
      "icon-arrow": arrow,
      "icon-search": search,
      "icon-wechat": wechat
    }

    return(
      <Icon component={() => icons[type]} />
    )
}