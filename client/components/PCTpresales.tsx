import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PCTPresale() {
  const [spendAmount, setSpendAmount] = useState("0.026 - 800");
  const [receiveAmount, setReceiveAmount] = useState("0.026 - 800");
  const [spendCurrency, setSpendCurrency] = useState("ETH");
  const [receiveCurrency, setReceiveCurrency] = useState("BTC");

  const currencies = [
    { value: "ETH", label: "ETH", icon: EthIcon },
    { value: "BTC", label: "BTC", icon: BitcoinIcon },
  ];

  const pctcurrencies = [
    { value: "BTC", label: "PCT", icon: BitcoinIcon },
  ]
  
  const getCurrencyIcon = (currency: string) => {
    const currencyData = currencies.find((c) => c.value === currency);
    return currencyData?.icon || EthIcon;
  };

  return (
    <div className="w-full max-w-[465px] mx-auto flex flex-col gap-4 p-10 rounded-2xl border border-black/[0.08] shadow-[0_0_16px_0_rgba(36,38,43,0.08)] backdrop-blur-[6px] bg-white/50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium text-black tracking-[-0.4px]" style={{fontFamily:'inter'}}>
          PCT Presale
        </h1>
        <div className="text-base font-medium text-black/60 tracking-[-0.32px]" >
          Stage 1
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-[13px] font-medium text-black/85" style={{fontFamily:'inter'}}>
          <span>1 PCT = $0.04550</span>
          <span>Next Stage = $0.0455</span>
        </div>

        <div className="relative">
          <div className="w-full h-6 rounded-full bg-gradient-to-r from-black via-[#001354] to-[#001354] flex items-center justify-between px-4 overflow-hidden">
            <div className="text-white text-[11px] font-normal z-10" style={{fontFamily:'inter'}}>
              Remaining Tokens: 1.88M
            </div>
            <div className="text-white text-[11px] font-normal z-10" style={{fontFamily:'inter'}} >
              93.51%
            </div>
          </div>
          <div
            className="absolute top-0 right-0 h-6 bg-gray-300 rounded-r-full"
            style={{ width: "6.49%" }}
          ></div>
        </div>

        <div className="flex justify-between items-center text-[13px] font-medium text-black/85" style={{fontFamily:'inter'}}>
          <span>Total Raised: 27,052,469</span>
          <span>PCT = $894,915.92</span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <div className="text-[11px] font-normal text-black/55 leading-[14px]" style={{fontFamily:'inter'}}>
            1 ETH is ≈
          </div>
          <div className="text-lg font-normal text-black/85 leading-6" style={{fontFamily:'inter'}}>
            84,637 PCT
          </div>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#DCDFE3] text-[12px] font-normal text-[#13162F] leading-6" style={{fontFamily:'inter'}}>
          Stage 1 Bonus <Info className="w-3 h-3" />
        </button>
      </div>

      <div className="flex justify-between items-center p-4 rounded-lg border border-[#DCDFE3]">
        <div className="flex flex-col gap-2 w-[111px]">
          <div className="text-[11px] font-normal text-black/72 leading-3" style={{fontFamily:'inter'}} >
            Spend
          </div>
          <div className="flex items-center gap-2" style={{fontFamily:'inter'}}>
            <EthIcon size={19} />
            <input
              type="text"
              value={spendAmount}
              onChange={(e) => setSpendAmount(e.target.value)}
              className="text-base font-normal text-[#757575] outline-none bg-transparent w-full"
              placeholder="0.026 - 800"
              style={{fontFamily:'inter'}}
            />
          </div>
        </div>
        <Select value={spendCurrency} onValueChange={setSpendCurrency}>
          <SelectTrigger className="flex items-center gap-1.5 px-3 h-[38px] min-h-[38px] rounded-lg bg-[#e2e2e28f] shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] min-w-[104px] w-auto border-0 focus:ring-0 focus:ring-offset-0 [&>svg]:hidden cursor-pointer">
            {(() => {
              const IconComponent = getCurrencyIcon(spendCurrency);
              return (
                <>
                  <div className="flex-shrink-0">
                    <IconComponent size={21} />
                  </div>
                  <SelectValue className="text-sm font-medium text-black flex-1 whitespace-nowrap" style={{fontFamily:'inter'}} />
                  <ChevronDown className="w-3.5 h-3.5 text-[#A8ABB2] flex-shrink-0" />
                </>
              );
            })()}
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => {
              const IconComponent = currency.icon;
              return (
                <SelectItem key={currency.value} value={currency.value} className="flex items-center gap-2 pl-2 [&>span:first-child]:hidden">
                  {/* <IconComponent size={19} /> */}
                  <span style={{fontFamily:'inter'}}>{currency.label}</span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between items-center p-4 rounded-lg border border-[#DCDFE3]">
        <div className="flex flex-col gap-2 w-[111px]">
          <div className="text-[11px] font-normal text-black/72 leading-3" style={{fontFamily:'inter'}}>
            Receive ≈
          </div>
          <div className="flex items-center gap-2">
            <BitcoinIcon size={19} />
            <input
              type="text"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
              className="text-base font-normal text-[#757575] outline-none bg-transparent w-full"
              placeholder="0.026 - 800"
              style={{fontFamily:'inter'}}
            />
          </div>
        </div>
        <Select value={receiveCurrency} onValueChange={setReceiveCurrency}>
          <SelectTrigger className="flex items-center gap-1.5 px-3 h-[38px] min-h-[38px] rounded-lg bg-[#e2e2e28f] shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] min-w-[104px] w-auto border-0 focus:ring-0 focus:ring-offset-0 [&>svg]:hidden cursor-pointer">
            {(() => {
              const IconComponent = getCurrencyIcon(receiveCurrency);
              return (
                <>
                  <div className="flex-shrink-0">
                    <IconComponent size={21} />
                  </div>
                  <SelectValue className="text-sm font-medium text-black flex-1 whitespace-nowrap" style={{fontFamily:'inter'}} />
                  <ChevronDown className="w-3.5 h-3.5 text-[#A8ABB2] flex-shrink-0" />
                </>
              );
            })()}
          </SelectTrigger>
          <SelectContent>
            {pctcurrencies.map((currency) => {
              const IconComponent = currency.icon;
              return (
                <SelectItem key={currency.value} value={currency.value} className="flex items-center gap-2 pl-2 [&>span:first-child]:hidden">
                  {/* <IconComponent size={19} /> */}
                  <span style={{fontFamily:'inter'}}>{currency.label}</span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <button className="w-full h-12 px-4 flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-black to-[#001354] text-white text-base font-medium tracking-[-0.32px] hover:opacity-90 transition-opacity" style={{fontFamily:'inter'}}>
        Buy
      </button>
    </div>
  );
}

function EthIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <g clipPath="url(#clip0_157_1189)">
        <g filter="url(#filter0_d_157_1189)">
          <path
            d="M9.5 17.8125C14.4188 17.8125 18.4062 13.825 18.4062 8.90625C18.4062 3.98746 14.4188 0 9.5 0C4.58121 0 0.59375 3.98746 0.59375 8.90625C0.59375 13.825 4.58121 17.8125 9.5 17.8125Z"
            fill="black"
          />
        </g>
        <path
          d="M9.5 17.8125C14.4188 17.8125 18.4062 13.825 18.4062 8.90625C18.4062 3.98746 14.4188 0 9.5 0C4.58121 0 0.59375 3.98746 0.59375 8.90625C0.59375 13.825 4.58121 17.8125 9.5 17.8125Z"
          fill="#627EEA"
        />
        <path
          style={{ mixBlendMode: "soft-light" }}
          d="M9.5 17.8125C14.4188 17.8125 18.4062 13.825 18.4062 8.90625C18.4062 3.98746 14.4188 0 9.5 0C4.58121 0 0.59375 3.98746 0.59375 8.90625C0.59375 13.825 4.58121 17.8125 9.5 17.8125Z"
          fill="url(#paint0_linear_157_1189)"
        />
        <path
          d="M9.5 17.5156C14.2548 17.5156 18.1094 13.6611 18.1094 8.90625C18.1094 4.15142 14.2548 0.296875 9.5 0.296875C4.74517 0.296875 0.890625 4.15142 0.890625 8.90625C0.890625 13.6611 4.74517 17.5156 9.5 17.5156Z"
          stroke="black"
          strokeOpacity="0.097"
          strokeWidth="0.59375"
        />
        <g filter="url(#filter1_d_157_1189)">
          <path
            d="M9.79569 12.4497L14.25 9.86575L9.79569 16.0283L5.34375 9.86516L9.79569 12.4486V12.4497ZM9.79569 1.78125L14.247 9.03688L9.79569 11.6215L5.34375 9.03688L9.79569 1.78125Z"
            fill="black"
          />
        </g>
        <path
          d="M9.7959 1.78125V7.04781L14.2472 9.03688L9.7959 1.78125Z"
          fill="white"
          fillOpacity="0.602"
        />
        <path
          d="M9.79569 1.78125L5.34375 9.03688L9.79569 7.04781V1.78125Z"
          fill="white"
        />
        <path
          d="M9.7959 12.4497V16.0283L14.2502 9.86572L9.7959 12.4497Z"
          fill="white"
          fillOpacity="0.602"
        />
        <path
          d="M9.79569 16.0283V12.4491L5.34375 9.86572L9.79569 16.0283Z"
          fill="white"
        />
        <path
          d="M9.7959 11.6214L14.2472 9.03683L9.7959 7.04895V11.6214Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M5.34375 9.03683L9.79569 11.6214V7.04895L5.34375 9.03683Z"
          fill="white"
          fillOpacity="0.602"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_157_1189"
          x="0"
          y="-0.296875"
          width="19"
          height="19"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.296875" />
          <feGaussianBlur stdDeviation="0.296875" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199474 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_1189"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_157_1189"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_157_1189"
          x="4.75"
          y="1.48438"
          width="10.0938"
          height="15.4346"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.296875" />
          <feGaussianBlur stdDeviation="0.296875" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_1189"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_157_1189"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_157_1189"
          x1="891.219"
          y1="0"
          x2="891.219"
          y2="1781.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0.5" />
        </linearGradient>
        <clipPath id="clip0_157_1189">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BitcoinIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <g clipPath="url(#clip0_157_1209)">
        <g filter="url(#filter0_d_157_1209)">
          <path
            d="M9.5 17.8125C14.4188 17.8125 18.4062 13.825 18.4062 8.90625C18.4062 3.98746 14.4188 0 9.5 0C4.58121 0 0.59375 3.98746 0.59375 8.90625C0.59375 13.825 4.58121 17.8125 9.5 17.8125Z"
            fill="black"
          />
        </g>
        <path
          d="M9.5 17.8125C14.4188 17.8125 18.4062 13.825 18.4062 8.90625C18.4062 3.98746 14.4188 0 9.5 0C4.58121 0 0.59375 3.98746 0.59375 8.90625C0.59375 13.825 4.58121 17.8125 9.5 17.8125Z"
          fill="#F7931A"
        />
        <path
          style={{ mixBlendMode: "soft-light" }}
          d="M9.5 17.8125C14.4188 17.8125 18.4062 13.825 18.4062 8.90625C18.4062 3.98746 14.4188 0 9.5 0C4.58121 0 0.59375 3.98746 0.59375 8.90625C0.59375 13.825 4.58121 17.8125 9.5 17.8125Z"
          fill="url(#paint0_linear_157_1209)"
        />
        <path
          d="M9.5 17.5156C14.2548 17.5156 18.1094 13.6611 18.1094 8.90625C18.1094 4.15142 14.2548 0.296875 9.5 0.296875C4.74517 0.296875 0.890625 4.15142 0.890625 8.90625C0.890625 13.6611 4.74517 17.5156 9.5 17.5156Z"
          stroke="black"
          strokeOpacity="0.097"
          strokeWidth="0.59375"
        />
        <g filter="url(#filter1_d_157_1209)">
          <path
            d="M13.7685 7.73063C13.9549 6.48613 13.0067 5.81697 11.7112 5.37047L12.1315 3.68422L11.1055 3.42891L10.6959 5.07063C10.4263 5.00294 10.1496 4.94 9.87351 4.87706L10.2862 3.22466L9.26017 2.96875L8.83979 4.65441C8.61654 4.60334 8.39686 4.55347 8.18429 4.50003L8.18548 4.49469L6.76998 4.14141L6.49686 5.23747C6.49686 5.23747 7.25864 5.41203 7.24261 5.42272C7.65823 5.52663 7.73304 5.80153 7.72057 6.02003L7.24201 7.94081C7.27051 7.94794 7.30732 7.95862 7.34889 7.97466L7.24023 7.94794L6.56929 10.6388C6.51823 10.7647 6.38939 10.9541 6.09845 10.8822C6.10914 10.8971 5.3527 10.6964 5.3527 10.6964L4.84326 11.8708L6.1792 12.2039C6.42739 12.2663 6.67082 12.3316 6.91011 12.3927L6.48557 14.098L7.51098 14.3533L7.93136 12.6671C8.21161 12.7425 8.48354 12.8125 8.74954 12.879L8.33036 14.5582L9.35636 14.8135L9.78089 13.1118C11.5313 13.4431 12.847 13.3095 13.401 11.7266C13.8475 10.4524 13.379 9.71672 12.4581 9.23756C13.129 9.08319 13.6337 8.64203 13.7685 7.73063ZM11.4232 11.0188C11.1067 12.2936 8.96032 11.6042 8.26445 11.4315L8.82851 9.17225C9.52439 9.34622 11.7551 9.69 11.4232 11.0188ZM11.7409 7.71222C11.4517 8.87181 9.6657 8.28222 9.08679 8.13794L9.59742 6.0895C10.1763 6.23378 12.0425 6.50275 11.7409 7.71222Z"
            fill="black"
          />
        </g>
        <path
          d="M13.7685 7.73063C13.9549 6.48613 13.0067 5.81697 11.7112 5.37047L12.1315 3.68422L11.1055 3.42891L10.6959 5.07063C10.4263 5.00294 10.1496 4.94 9.87351 4.87706L10.2862 3.22466L9.26017 2.96875L8.83979 4.65441C8.61654 4.60334 8.39686 4.55347 8.18429 4.50003L8.18548 4.49469L6.76998 4.14141L6.49686 5.23747C6.49686 5.23747 7.25864 5.41203 7.24261 5.42272C7.65823 5.52663 7.73304 5.80153 7.72057 6.02003L7.24201 7.94081C7.27051 7.94794 7.30732 7.95862 7.34889 7.97466L7.24023 7.94794L6.56929 10.6388C6.51823 10.7647 6.38939 10.9541 6.09845 10.8822C6.10914 10.8971 5.3527 10.6964 5.3527 10.6964L4.84326 11.8708L6.1792 12.2039C6.42739 12.2663 6.67082 12.3316 6.91011 12.3927L6.48557 14.098L7.51098 14.3533L7.93136 12.6671C8.21161 12.7425 8.48354 12.8125 8.74954 12.879L8.33036 14.5582L9.35636 14.8135L9.78089 13.1118C11.5313 13.4431 12.847 13.3095 13.401 11.7266C13.8475 10.4524 13.379 9.71672 12.4581 9.23756C13.129 9.08319 13.6337 8.64203 13.7685 7.73063ZM11.4232 11.0188C11.1067 12.2936 8.96032 11.6042 8.26445 11.4315L8.82851 9.17225C9.52439 9.34622 11.7551 9.69 11.4232 11.0188ZM11.7409 7.71222C11.4517 8.87181 9.6657 8.28222 9.08679 8.13794L9.59742 6.0895C10.1763 6.23378 12.0425 6.50275 11.7409 7.71222Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_157_1209"
          x="0"
          y="-0.296875"
          width="19"
          height="19"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.296875" />
          <feGaussianBlur stdDeviation="0.296875" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199474 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_1209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_157_1209"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_157_1209"
          x="4.24951"
          y="2.67188"
          width="10.1362"
          height="13.0322"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.296875" />
          <feGaussianBlur stdDeviation="0.296875" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_1209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_157_1209"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_157_1209"
          x1="891.219"
          y1="0"
          x2="891.219"
          y2="1781.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0.5" />
        </linearGradient>
        <clipPath id="clip0_157_1209">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}