import React from 'react'
import Certificate from '../Certificate/Certificate'

export default function Cirnew() {
  return (
    <>
      {/* <nav className='Focal-x-Nav'>
    <div className='logo-side'>
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="21" viewBox="0 0 75 21" fill="none">
        <g clipPath="url(#clip0_2076_73)">
          <path d="M4.54212 0.0252637V1.09008C4.35797 1.06794 4.17276 1.05731 3.98746 1.05827C2.02648 1.05827 0.990532 2.46742 0.990532 5.1332V7.84016H2.80738V8.83854H0.987038V20.5225H0V5.0125C0 3.29831 0.414905 1.94717 1.19929 1.10599C1.88411 0.374276 2.82048 0 3.98396 0C4.18661 0 4.36742 0.00842122 4.54212 0.0252637Z" fill="#282828" />
          <path d="M52.0554 0.0664062H51.0684V20.5693H52.0554V0.0664062Z" fill="#282828" />
          <path d="M59.7104 2.75675C59.5824 2.5862 59.4874 2.3901 59.4309 2.17985C59.3743 1.96961 59.3573 1.74941 59.3809 1.53208C59.4045 1.31474 59.4682 1.10461 59.5683 0.913886C59.6685 0.723166 59.803 0.555669 59.964 0.421137C60.1251 0.286606 60.3096 0.187724 60.5066 0.130242C60.7037 0.0727612 60.9095 0.057828 61.112 0.0863111C61.3145 0.114794 61.5097 0.186125 61.6863 0.296156C61.8628 0.406187 62.0172 0.552721 62.1404 0.727236L66.5078 6.71566C66.541 6.76151 66.5786 6.80923 66.6153 6.85134C66.0804 6.94485 65.5761 7.18093 65.1487 7.53787C64.7213 7.8948 64.3846 8.36113 64.1695 8.89395C64.1418 8.84228 64.1105 8.79287 64.076 8.74611L59.7104 2.75675Z" fill="#282828" />
          <path d="M74.6718 17.9082C74.8004 18.0784 74.896 18.2744 74.9532 18.4846C75.0104 18.6949 75.0279 18.9152 75.0048 19.1328C74.9817 19.3504 74.9183 19.5609 74.8185 19.752C74.7187 19.9431 74.5844 20.1111 74.4234 20.246C74.2624 20.381 74.078 20.4803 73.8808 20.5381C73.6836 20.596 73.4777 20.6112 73.275 20.5829C73.0722 20.5547 72.8768 20.4835 72.7 20.3735C72.5232 20.2635 72.3687 20.117 72.2453 19.9424L67.8779 13.9539C67.8062 13.8537 67.7224 13.7641 67.6289 13.6873C68.1762 13.5975 68.6928 13.3587 69.1292 12.9937C69.5656 12.6286 69.9071 12.1496 70.121 11.6025C70.1703 11.7149 70.2313 11.821 70.3026 11.9188L74.6718 17.9082Z" fill="#282828" />
          <path d="M66.7273 13.7099C66.6471 13.7813 66.5745 13.8619 66.5107 13.9503L62.1433 19.9388C61.8914 20.2839 61.5219 20.5078 61.116 20.5612C60.7101 20.6145 60.301 20.493 59.9788 20.2232C59.6565 19.9535 59.4475 19.5576 59.3977 19.1228C59.3479 18.688 59.4614 18.2498 59.7132 17.9046L64.0806 11.9161C64.1234 11.8567 64.1622 11.7942 64.1968 11.729C64.4274 12.2618 64.7811 12.7228 65.2243 13.0684C65.6676 13.414 66.1858 13.6329 66.7299 13.7042" fill="#282828" />
          <path d="M67.7352 6.8829C67.7859 6.83186 67.8329 6.77681 67.8759 6.71821L72.2433 0.729791C72.3678 0.559176 72.5224 0.416492 72.6983 0.309885C72.8742 0.203278 73.0681 0.134835 73.2687 0.108465C73.4693 0.0820948 73.6728 0.0983134 73.8676 0.156195C74.0624 0.214076 74.2446 0.312487 74.4039 0.445808C74.5631 0.57913 74.6963 0.74475 74.7959 0.933214C74.8954 1.12168 74.9593 1.3293 74.9839 1.54421C75.0085 1.75912 74.9934 1.97713 74.9393 2.18578C74.8853 2.39442 74.7934 2.58963 74.669 2.76024L70.3015 8.74866C70.2381 8.83583 70.1833 8.92992 70.1382 9.02937C69.9398 8.48315 69.6151 7.99985 69.1947 7.62475C68.7742 7.24965 68.2718 6.99503 67.7344 6.88477" fill="#282828" />
          <path d="M69.2236 10.3327C69.2238 10.7632 69.1048 11.1841 68.8816 11.5421C68.6585 11.9001 68.3412 12.1793 67.97 12.3441C67.5988 12.509 67.1902 12.5522 66.796 12.4684C66.4019 12.3845 66.0398 12.1773 65.7555 11.8729C65.4713 11.5686 65.2777 11.1808 65.1993 10.7586C65.1208 10.3364 65.161 9.89872 65.3147 9.50098C65.4685 9.10324 65.7289 8.76327 66.063 8.52408C66.3972 8.2849 66.79 8.15723 67.1919 8.15723C67.7306 8.15723 68.2472 8.3864 68.6282 8.79435C69.0092 9.20231 69.2234 9.75565 69.2236 10.3327Z" fill="#FF8500" />
          <path d="M11.427 7.75977C8.03963 7.75977 5.4873 10.5163 5.4873 14.1721V14.2188C5.4873 17.8475 8.04137 20.5815 11.427 20.5815C14.8126 20.5815 17.3667 17.8259 17.3667 14.1702V14.129C17.3667 10.5004 14.8118 7.76632 11.427 7.76632V7.75977ZM16.4216 14.1487V14.1955C16.4216 17.2832 14.2842 19.614 11.4506 19.614C8.63884 19.614 6.43591 17.2336 6.43591 14.1955V14.1487C6.43591 11.0609 8.57245 8.73008 11.406 8.73008C14.2187 8.73008 16.4216 11.1105 16.4216 14.1487Z" fill="#282828" />
          <path d="M45.3908 9.15102C44.5409 8.24059 43.2988 7.7793 41.6995 7.7793C40.3604 7.7793 39.1393 8.10772 37.74 8.84411L37.5399 8.94985L37.9051 9.8294L38.1208 9.71805C39.4188 9.04903 40.5159 8.75054 41.6776 8.75054C44.2501 8.75054 45.6083 10.1176 45.6083 12.7038V13.3467C44.3415 12.9281 43.0234 12.7145 41.6977 12.7132C38.5715 12.7132 36.5503 14.2852 36.5503 16.7161V16.7638C36.5503 19.3688 38.8074 20.5543 40.9046 20.5543C43.2342 20.5543 44.8353 19.3837 45.6083 18.2282V20.5852H46.5368V12.6795C46.5368 11.1759 46.1403 9.95571 45.3891 9.15102H45.3908ZM45.6083 14.3647V15.7018C45.6083 17.5685 43.8186 19.583 40.9265 19.583C39.3463 19.583 37.5015 18.8392 37.5015 16.7404V16.6927C37.5015 14.4751 39.6809 13.6854 41.7204 13.6854C43.1704 13.6854 44.4073 13.9015 45.6083 14.3647Z" fill="#282828" />
          <path d="M27.7228 8.74875C28.7536 8.73717 29.7604 9.08169 30.594 9.73123L30.6097 9.74339H32.023L31.9173 9.63766C31.1478 8.84139 29.8768 7.78125 27.7438 7.78125C24.5215 7.78125 21.8984 10.6426 21.8984 14.1589V14.2038C21.8984 17.723 24.5119 20.5852 27.7228 20.5852C29.3466 20.5852 30.718 19.9696 31.9156 18.7026L32.0178 18.5941H30.6132L30.5975 18.6063C29.7762 19.2703 28.7727 19.6244 27.7438 19.6131C25.0447 19.6131 22.8523 17.1803 22.8523 14.1814V14.1365C22.8523 11.1161 24.9932 8.75063 27.7263 8.75063" fill="#282828" />
        </g>
        <defs>
          <clipPath id="clip0_2076_73">
            <rect width="75" height="20.5833" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h1>Digital marketing agency</h1>
    </div>
    <div className='ul-side-nav'>
      <ul className="ullll">
        <li className={choslink === 1 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(1)}>Home</Link> </li>
        <li className={choslink === 2 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(2)}>Services</Link> </li>
        <li className={choslink === 3 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(3)}>Portfolio</Link> </li>
        <li className={choslink === 4 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(4)}>Clients & Partners</Link> </li>
        <li className={choslink === 5 ? 'Activlink' : ''}><Link to={'/AcademyPage'} onClick={() => (chosLink(5) , HandelSecroll())}>X Academy</Link> </li>
        <li className={choslink === 6 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(6)}>
        About Us
        <span className={choslink2 ? 'awro-fq-navbar' : 'awro-fq-navbar2'}></span>
        <li className={choslink2 ? 'About-list' : 'About-list2'}>
          <p>Who & Why</p>
          <p>Internship</p>
          <p>Achievement</p>
        </li>
        </Link></li>
        <li className={choslink === 7 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(7)}>Let’s Talk</Link> </li>
      </ul>
    </div>
    <div
      onClick={() => changeClass()}
      className='nav-toglle-xa'
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
        <line y1="14.25" x2="25" y2="14.25" stroke="#282828" strokeWidth="3" />
        <line y1="6.875" x2="25" y2="6.875" stroke="#282828" strokeWidth="2" />
        <line y1="0.5" x2="25" y2="0.5" stroke="#282828" />
      </svg>
    </div>
    <div
      className={sidclass}
    >
      <div className='x'
        onClick={() => changeClass2()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M13.892 13.3707C13.9612 13.4399 14 13.5336 14 13.6314C14 13.7291 13.9612 13.8229 13.892 13.892C13.8229 13.9612 13.7291 14 13.6314 14C13.5336 14 13.4399 13.9612 13.3707 13.892L7 7.5213L0.629266 13.892C0.560137 13.9612 0.466378 14 0.368615 14C0.270852 14 0.177094 13.9612 0.107965 13.892C0.0388363 13.8229 1.92714e-09 13.7291 0 13.6314C-1.92714e-09 13.5336 0.0388359 13.4399 0.107965 13.3707L6.4787 7L0.107965 0.629266C0.0388359 0.560137 0 0.466378 0 0.368615C0 0.270852 0.0388359 0.177093 0.107965 0.107965C0.177093 0.0388359 0.270852 0 0.368615 0C0.466378 0 0.560137 0.0388359 0.629266 0.107965L7 6.4787L13.3707 0.107965C13.405 0.0737356 13.4456 0.0465836 13.4903 0.028059C13.535 0.00953434 13.583 9.54222e-10 13.6314 0C13.6798 -9.54221e-10 13.7277 0.00953434 13.7724 0.028059C13.8172 0.0465836 13.8578 0.0737356 13.892 0.107965C13.9263 0.142194 13.9534 0.18283 13.9719 0.227552C13.9905 0.272275 14 0.320208 14 0.368615C14 0.417022 13.9905 0.464956 13.9719 0.509678C13.9534 0.554401 13.9263 0.595036 13.892 0.629266L7.5213 7L13.892 13.3707Z" fill="black" />
        </svg>
      </div>
      <div className='ul'>
      <ul>
        <li className={choslink === 1 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(1)}>Home</Link> </li>
        <li className={choslink === 2 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(2)}>Services</Link> </li>
        <li className={choslink === 3 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(3)}>Portfolio</Link> </li>
        <li className={choslink === 4 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(4)}>Clients & Partners</Link> </li>
        <li className={choslink === 5 ? 'Activlink' : ''}><Link to={'/AcademyPage'} onClick={() => chosLink(5)}>X Academy</Link> </li>
        <li className={choslink === 6 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(6)}>
        About Us
        <span className={choslink2 ? 'awro-fq-navbar' : 'awro-fq-navbar2'}></span>
        <li className={choslink2 ? 'About-list' : 'About-list2'}>
          <p>Who & Why</p>
          <p>Internship</p>
          <p>Achievement</p>
        </li>
        </Link></li>
        <li className={choslink === 7 ? 'Activlink' : ''}><Link to={'/'} onClick={() => chosLink(7)}>Let’s Talk</Link> </li>
      </ul>
      </div>
    </div>
  </nav> */}
    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Certificate/>
    </div>
    </>
  )
}
