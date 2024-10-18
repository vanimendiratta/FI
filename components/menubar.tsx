import React from 'react'

const Menubar = () => {
  return (
    <div className='rounded-t-2xl text-grey flex gap-6 shadow-sucess shadow-lg pt-3 justify-center  items-center lg:hidden '>
      <div className='flex flex-col items-center'>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_591_4538)">
<path d="M20.5153 9.17838L13.0153 2.3846C13.0116 2.38153 13.0082 2.37822 13.005 2.3747C12.7289 2.1336 12.369 2 11.9958 2C11.6225 2 11.2627 2.1336 10.9866 2.3747L10.9763 2.3846L3.48469 9.17838C3.33187 9.31329 3.20989 9.47719 3.12646 9.6597C3.04303 9.84221 2.99997 10.0394 3 10.2387V18.5599C3 18.9418 3.15804 19.3081 3.43934 19.5782C3.72064 19.8483 4.10218 20 4.5 20H9C9.39782 20 9.77936 19.8483 10.0607 19.5782C10.342 19.3081 10.5 18.9418 10.5 18.5599V14.2395H13.5V18.5599C13.5 18.9418 13.658 19.3081 13.9393 19.5782C14.2206 19.8483 14.6022 20 15 20H19.5C19.8978 20 20.2794 19.8483 20.5607 19.5782C20.842 19.3081 21 18.9418 21 18.5599V10.2387C21 10.0394 20.957 9.84221 20.8735 9.6597C20.7901 9.47719 20.6681 9.31329 20.5153 9.17838ZM19.5 18.5599H15V14.2395C15 13.8576 14.842 13.4913 14.5607 13.2212C14.2794 12.9511 13.8978 12.7994 13.5 12.7994H10.5C10.1022 12.7994 9.72064 12.9511 9.43934 13.2212C9.15804 13.4913 9 13.8576 9 14.2395V18.5599H4.5V10.2387L4.51031 10.2297L12 3.43859L19.4906 10.2279L19.5009 10.2369L19.5 18.5599Z" fill="url(#paint0_linear_591_4538)"/>
</g>
<defs>
<filter id="filter0_d_591_4538" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.356863 0 0 0 0 0.72549 0 0 0 0 0.333333 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_591_4538"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_591_4538" result="shape"/>
</filter>
<linearGradient id="paint0_linear_591_4538" x1="3" y1="0.98261" x2="23.6312" y2="8.24018" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BB955"/>
<stop offset="1" stop-color="#2AA952"/>
</linearGradient>
</defs>
</svg>
<p>
  Home
  </p>
      </div>

      <div className='flex flex-col gap-2 items-center'>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6223 17.0004H8.52431M2.0459 17.0004H5.2851M15.0027 17.0004V11.4004M3.6655 17.0004V11.4004" stroke="#8F8F8F" stroke-width="1.23721" stroke-linecap="round"/>
<path d="M9.33341 1H5.66663C4.69244 1 4.20575 1 3.81462 1.2392C3.42267 1.4776 3.20483 1.908 2.76997 2.7688L1.6322 5.608C1.36982 6.264 1.13984 7.0368 1.58199 7.5912C1.79029 7.85282 2.07599 8.04375 2.3993 8.1374C2.72261 8.23105 3.06744 8.22276 3.38576 8.11368C3.70408 8.00461 3.98004 7.80017 4.17521 7.52886C4.37038 7.25754 4.47503 6.93285 4.4746 6.6C4.4746 7.02435 4.64524 7.43131 4.94897 7.73137C5.25271 8.03143 5.66466 8.2 6.09421 8.2C6.52375 8.2 6.9357 8.03143 7.23944 7.73137C7.54317 7.43131 7.71381 7.02435 7.71381 6.6C7.71381 7.02435 7.88445 7.43131 8.18818 7.73137C8.49192 8.03143 8.90387 8.2 9.33341 8.2C9.76296 8.2 10.1749 8.03143 10.4786 7.73137C10.7824 7.43131 10.953 7.02435 10.953 6.6C10.953 7.02435 11.1237 7.43131 11.4274 7.73137C11.7311 8.03143 12.1431 8.2 12.5726 8.2C13.0022 8.2 13.4141 8.03143 13.7179 7.73137C14.0216 7.43131 14.1922 7.02435 14.1922 6.6C14.1922 6.93258 14.297 7.25691 14.4922 7.52789C14.6874 7.79886 14.9632 8.00301 15.2813 8.11195C15.5994 8.22089 15.9439 8.2292 16.267 8.13573C16.5901 8.04225 16.8757 7.85164 17.084 7.5904C17.5262 7.036 17.2962 6.2632 17.0338 5.6072L15.8969 2.7688C15.462 1.908 15.2442 1.4776 14.8522 1.2392C14.4611 1 13.9744 1 13.0002 1H12.5726" stroke="#8F8F8F" stroke-width="1.23721" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p>
  Shop
</p>
      </div>

      <div className='flex flex-col gap-2 items-center'>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9527 1.14286H12.667V0.571429C12.667 0.419876 12.6068 0.274531 12.4996 0.167368C12.3925 0.0602039 12.2471 0 12.0956 0C11.944 0 11.7987 0.0602039 11.6915 0.167368C11.5843 0.274531 11.5241 0.419876 11.5241 0.571429V1.14286H5.80985V0.571429C5.80985 0.419876 5.74965 0.274531 5.64248 0.167368C5.53532 0.0602039 5.38997 0 5.23842 0C5.08687 0 4.94152 0.0602039 4.83436 0.167368C4.7272 0.274531 4.66699 0.419876 4.66699 0.571429V1.14286H2.38128C1.92662 1.14286 1.49059 1.32347 1.16909 1.64496C0.847604 1.96645 0.666992 2.40249 0.666992 2.85714V14.2857C0.666992 14.7404 0.847604 15.1764 1.16909 15.4979C1.49059 15.8194 1.92662 16 2.38128 16H14.9527C15.4074 16 15.8434 15.8194 16.1649 15.4979C16.4864 15.1764 16.667 14.7404 16.667 14.2857V2.85714C16.667 2.40249 16.4864 1.96645 16.1649 1.64496C15.8434 1.32347 15.4074 1.14286 14.9527 1.14286ZM2.38128 2.28571H14.9527C15.1043 2.28571 15.2496 2.34592 15.3568 2.45308C15.4639 2.56025 15.5241 2.70559 15.5241 2.85714V4.57143H1.80985V2.85714C1.80985 2.70559 1.87005 2.56025 1.97722 2.45308C2.08438 2.34592 2.22973 2.28571 2.38128 2.28571ZM14.9527 14.8571H2.38128C2.22973 14.8571 2.08438 14.7969 1.97722 14.6898C1.87005 14.5826 1.80985 14.4373 1.80985 14.2857V5.71429H15.5241V14.2857C15.5241 14.4373 15.4639 14.5826 15.3568 14.6898C15.2496 14.7969 15.1043 14.8571 14.9527 14.8571Z" fill="#9B9B9B"/>
<path d="M11.1531 7.56602L7.55312 10.6517L6.21255 9.31173C6.10478 9.20764 5.96043 9.15004 5.8106 9.15135C5.66078 9.15265 5.51746 9.21275 5.41151 9.31869C5.30556 9.42464 5.24546 9.56796 5.24416 9.71779C5.24286 9.86762 5.30046 10.012 5.40455 10.1197L7.11883 11.834C7.22062 11.9357 7.35699 11.9952 7.50073 12.0007C7.64447 12.0062 7.785 11.9573 7.89426 11.8637L11.8943 8.43516C11.9545 8.3874 12.0044 8.32799 12.0412 8.26048C12.0779 8.19297 12.1006 8.11874 12.108 8.04224C12.1153 7.96574 12.1072 7.88854 12.0841 7.81526C12.0609 7.74198 12.0232 7.67412 11.9732 7.61575C11.9232 7.55738 11.862 7.50969 11.7931 7.47554C11.7243 7.44139 11.6492 7.42147 11.5725 7.41699C11.4958 7.41251 11.419 7.42355 11.3466 7.44945C11.2742 7.47535 11.2079 7.51558 11.1514 7.56773L11.1531 7.56602Z" fill="#9B9B9B"/>
</svg>
<p>
  Book Slot
</p>
      </div>

      <div className='flex flex-col gap-2 items-center'>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.898 16.9047C16.5812 14.5375 14.5521 12.8401 12.1841 12.0354C13.3555 11.3103 14.2655 10.2054 14.7745 8.89035C15.2835 7.57531 15.3634 6.12287 15.0018 4.75608C14.6402 3.3893 13.8571 2.18373 12.7729 1.32453C11.6886 0.465331 10.3632 0 9 0C7.63684 0 6.31136 0.465331 5.22712 1.32453C4.14289 2.18373 3.35984 3.3893 2.99824 4.75608C2.63664 6.12287 2.71647 7.57531 3.22548 8.89035C3.7345 10.2054 4.64454 11.3103 5.81586 12.0354C3.44786 12.8392 1.41876 14.5366 0.102048 16.9047C0.0537623 16.9866 0.0217345 17.0777 0.0078546 17.1727C-0.00602527 17.2676 -0.00147602 17.3645 0.0212339 17.4576C0.0439439 17.5507 0.0843545 17.6381 0.140082 17.7147C0.195809 17.7913 0.265723 17.8555 0.3457 17.9036C0.425677 17.9516 0.514097 17.9825 0.605742 17.9944C0.697387 18.0064 0.790402 17.9991 0.879298 17.973C0.968193 17.947 1.05117 17.9027 1.12333 17.8427C1.19549 17.7828 1.25538 17.7084 1.29945 17.624C2.92826 14.6966 5.80722 12.9489 9 12.9489C12.1928 12.9489 15.0717 14.6966 16.7006 17.624C16.7446 17.7084 16.8045 17.7828 16.8767 17.8427C16.9488 17.9027 17.0318 17.947 17.1207 17.973C17.2096 17.9991 17.3026 18.0064 17.3943 17.9944C17.4859 17.9825 17.5743 17.9516 17.6543 17.9036C17.7343 17.8555 17.8042 17.7913 17.8599 17.7147C17.9156 17.6381 17.9561 17.5507 17.9788 17.4576C18.0015 17.3645 18.006 17.2676 17.9921 17.1727C17.9783 17.0777 17.9462 16.9866 17.898 16.9047ZM4.15852 6.47566C4.15852 5.47989 4.44247 4.50648 4.97445 3.67852C5.50644 2.85056 6.26258 2.20525 7.14725 1.82418C8.03191 1.44312 9.00537 1.34341 9.94453 1.53768C10.8837 1.73194 11.7464 2.21146 12.4234 2.91557C13.1005 3.61969 13.5616 4.5168 13.7485 5.49344C13.9353 6.47008 13.8394 7.48239 13.4729 8.40237C13.1065 9.32234 12.486 10.1087 11.6898 10.6619C10.8936 11.2151 9.95755 11.5104 9 11.5104C7.71638 11.509 6.48573 10.9781 5.57807 10.0342C4.67042 9.09029 4.15989 7.81052 4.15852 6.47566Z" fill="#8F8F8F"/>
</svg>
<p>
  Profile
  </p>
      </div>
      
    </div>
  )
}

export default Menubar
