import React from 'react'
import './Clockicon.css'
const Clockicon = () => {
  return (
    <div className='Clock'>
      <div className="clockicon d-flex">
                        <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25.3679" cy="26.159" r="21.1262" stroke="#539BBB" stroke-width="3.16893" />
                            <path d="M25.3682 17.7086V25.5938C25.3682 25.947 25.5447 26.2768 25.8385 26.4727L31.706 30.3843" stroke="#539BBB" stroke-width="3.16893" stroke-linecap="round" />
                        </svg>
                        <div className="caution-icon d-flex">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1731_1254)">
                                    <circle cx="10.1709" cy="10.9626" r="10.1406" fill="#FF0000" />
                                    <path d="M10.8403 5.27961L10.6708 11.603H9.43221L9.26272 5.27961H10.8403ZM10.0971 14.4322C9.8277 14.4322 9.60171 14.3409 9.41918 14.1584C9.23665 13.9759 9.14538 13.7499 9.14538 13.4804C9.14538 13.211 9.23665 12.985 9.41918 12.8025C9.60171 12.6199 9.8277 12.5287 10.0971 12.5287C10.3579 12.5287 10.5795 12.6199 10.7621 12.8025C10.9446 12.985 11.0359 13.211 11.0359 13.4804C11.0359 13.7499 10.9446 13.9759 10.7621 14.1584C10.5795 14.3409 10.3579 14.4322 10.0971 14.4322Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1731_1254" x="0.0302734" y="0.822021" width="23.1786" height="23.1785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="1.44865" dy="1.44865" />
                                        <feGaussianBlur stdDeviation="0.724327" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1731_1254" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1731_1254" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>


                    </div>
    </div>
  )
}

export default Clockicon
