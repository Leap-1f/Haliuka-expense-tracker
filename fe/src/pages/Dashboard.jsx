import { Button, Input, Text, Logo } from "../components/ui/index";

export default function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <div className="py-2 mx-auto container">
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M16.1294 8.18255V0.404785H8.18219V8.18255H0.234985V16.1298H8.18219V23.9075H16.1294V16.1298H24.0766V8.18255H16.1294ZM16.1294 15.9603H8.18219V8.35319H16.1294V15.9603Z"
                fill="#0166FF"
              />
            </svg>
            <p className="font-bold">Dashboard</p>
            <p>Records</p>
          </div>
          <div className="flex gap-10 items-center">
            <svg
              width="99"
              height="32"
              viewBox="0 0 99 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="99" height="32" rx="16" fill="#0166FF" />
              <path
                d="M29.5 16C29.5 16.1658 29.4342 16.3247 29.3169 16.4419C29.1997 16.5592 29.0408 16.625 28.875 16.625H22.625V22.875C22.625 23.0408 22.5592 23.1997 22.4419 23.3169C22.3247 23.4342 22.1658 23.5 22 23.5C21.8342 23.5 21.6753 23.4342 21.5581 23.3169C21.4408 23.1997 21.375 23.0408 21.375 22.875V16.625H15.125C14.9592 16.625 14.8003 16.5592 14.6831 16.4419C14.5658 16.3247 14.5 16.1658 14.5 16C14.5 15.8342 14.5658 15.6753 14.6831 15.5581C14.8003 15.4408 14.9592 15.375 15.125 15.375H21.375V9.125C21.375 8.95924 21.4408 8.80027 21.5581 8.68306C21.6753 8.56585 21.8342 8.5 22 8.5C22.1658 8.5 22.3247 8.56585 22.4419 8.68306C22.5592 8.80027 22.625 8.95924 22.625 9.125V15.375H28.875C29.0408 15.375 29.1997 15.4408 29.3169 15.5581C29.4342 15.6753 29.5 15.8342 29.5 16Z"
                fill="white"
              />
              <path
                d="M37.3203 9.625H41.0859C41.9401 9.625 42.6615 9.75521 43.25 10.0156C43.8438 10.276 44.2943 10.6615 44.6016 11.1719C44.9141 11.6771 45.0703 12.2995 45.0703 13.0391C45.0703 13.5599 44.9635 14.0365 44.75 14.4688C44.5417 14.8958 44.2396 15.2604 43.8438 15.5625C43.4531 15.8594 42.9844 16.0807 42.4375 16.2266L42.0156 16.3906H38.4766L38.4609 15.1641H41.1328C41.6745 15.1641 42.125 15.0703 42.4844 14.8828C42.8438 14.6901 43.1146 14.4323 43.2969 14.1094C43.4792 13.7865 43.5703 13.4297 43.5703 13.0391C43.5703 12.6016 43.4844 12.2188 43.3125 11.8906C43.1406 11.5625 42.8698 11.3099 42.5 11.1328C42.1354 10.9505 41.6641 10.8594 41.0859 10.8594H38.8281V21H37.3203V9.625ZM43.9688 21L41.2031 15.8438L42.7734 15.8359L45.5781 20.9062V21H43.9688ZM50.4688 21.1562C49.8802 21.1562 49.3464 21.0573 48.8672 20.8594C48.3932 20.6562 47.9844 20.3724 47.6406 20.0078C47.3021 19.6432 47.0417 19.2109 46.8594 18.7109C46.6771 18.2109 46.5859 17.6641 46.5859 17.0703V16.7422C46.5859 16.0547 46.6875 15.4427 46.8906 14.9062C47.0938 14.3646 47.3698 13.9062 47.7188 13.5312C48.0677 13.1562 48.4635 12.8724 48.9062 12.6797C49.349 12.487 49.8073 12.3906 50.2812 12.3906C50.8854 12.3906 51.4062 12.4948 51.8438 12.7031C52.2865 12.9115 52.6484 13.2031 52.9297 13.5781C53.2109 13.9479 53.4193 14.3854 53.5547 14.8906C53.6901 15.3906 53.7578 15.9375 53.7578 16.5312V17.1797H47.4453V16H52.3125V15.8906C52.2917 15.5156 52.2135 15.151 52.0781 14.7969C51.9479 14.4427 51.7396 14.151 51.4531 13.9219C51.1667 13.6927 50.776 13.5781 50.2812 13.5781C49.9531 13.5781 49.651 13.6484 49.375 13.7891C49.099 13.9245 48.862 14.1276 48.6641 14.3984C48.4661 14.6693 48.3125 15 48.2031 15.3906C48.0938 15.7812 48.0391 16.2318 48.0391 16.7422V17.0703C48.0391 17.4714 48.0938 17.849 48.2031 18.2031C48.3177 18.5521 48.4818 18.8594 48.6953 19.125C48.9141 19.3906 49.1771 19.599 49.4844 19.75C49.7969 19.901 50.151 19.9766 50.5469 19.9766C51.0573 19.9766 51.4896 19.8724 51.8438 19.6641C52.1979 19.4557 52.5078 19.1771 52.7734 18.8281L53.6484 19.5234C53.4661 19.7995 53.2344 20.0625 52.9531 20.3125C52.6719 20.5625 52.3255 20.7656 51.9141 20.9219C51.5078 21.0781 51.026 21.1562 50.4688 21.1562ZM58.8281 19.9688C59.1719 19.9688 59.4896 19.8984 59.7812 19.7578C60.0729 19.6172 60.3125 19.4245 60.5 19.1797C60.6875 18.9297 60.7943 18.6458 60.8203 18.3281H62.1953C62.1693 18.8281 62 19.2943 61.6875 19.7266C61.3802 20.1536 60.9766 20.5 60.4766 20.7656C59.9766 21.026 59.4271 21.1562 58.8281 21.1562C58.1927 21.1562 57.638 21.0443 57.1641 20.8203C56.6953 20.5964 56.3047 20.2891 55.9922 19.8984C55.6849 19.5078 55.4531 19.0599 55.2969 18.5547C55.1458 18.0443 55.0703 17.5052 55.0703 16.9375V16.6094C55.0703 16.0417 55.1458 15.5052 55.2969 15C55.4531 14.4896 55.6849 14.0391 55.9922 13.6484C56.3047 13.2578 56.6953 12.9505 57.1641 12.7266C57.638 12.5026 58.1927 12.3906 58.8281 12.3906C59.4896 12.3906 60.0677 12.526 60.5625 12.7969C61.0573 13.0625 61.4453 13.4271 61.7266 13.8906C62.013 14.349 62.1693 14.8698 62.1953 15.4531H60.8203C60.7943 15.1042 60.6953 14.7891 60.5234 14.5078C60.3568 14.2266 60.1276 14.0026 59.8359 13.8359C59.5495 13.6641 59.2135 13.5781 58.8281 13.5781C58.3854 13.5781 58.013 13.6667 57.7109 13.8438C57.4141 14.0156 57.1771 14.25 57 14.5469C56.8281 14.8385 56.7031 15.1641 56.625 15.5234C56.5521 15.8776 56.5156 16.2396 56.5156 16.6094V16.9375C56.5156 17.3073 56.5521 17.6719 56.625 18.0312C56.6979 18.3906 56.8203 18.7161 56.9922 19.0078C57.1693 19.2995 57.4062 19.5339 57.7031 19.7109C58.0052 19.8828 58.3802 19.9688 58.8281 19.9688ZM63.4375 16.8672V16.6875C63.4375 16.0781 63.526 15.513 63.7031 14.9922C63.8802 14.4661 64.1354 14.0104 64.4688 13.625C64.8021 13.2344 65.2057 12.9323 65.6797 12.7188C66.1536 12.5 66.6849 12.3906 67.2734 12.3906C67.8672 12.3906 68.401 12.5 68.875 12.7188C69.3542 12.9323 69.7604 13.2344 70.0938 13.625C70.4323 14.0104 70.6901 14.4661 70.8672 14.9922C71.0443 15.513 71.1328 16.0781 71.1328 16.6875V16.8672C71.1328 17.4766 71.0443 18.0417 70.8672 18.5625C70.6901 19.0833 70.4323 19.5391 70.0938 19.9297C69.7604 20.3151 69.3568 20.6172 68.8828 20.8359C68.4141 21.0495 67.8828 21.1562 67.2891 21.1562C66.6953 21.1562 66.1615 21.0495 65.6875 20.8359C65.2135 20.6172 64.8073 20.3151 64.4688 19.9297C64.1354 19.5391 63.8802 19.0833 63.7031 18.5625C63.526 18.0417 63.4375 17.4766 63.4375 16.8672ZM64.8828 16.6875V16.8672C64.8828 17.2891 64.9323 17.6875 65.0312 18.0625C65.1302 18.4323 65.2786 18.7604 65.4766 19.0469C65.6797 19.3333 65.9323 19.5599 66.2344 19.7266C66.5365 19.888 66.888 19.9688 67.2891 19.9688C67.6849 19.9688 68.0312 19.888 68.3281 19.7266C68.6302 19.5599 68.8802 19.3333 69.0781 19.0469C69.276 18.7604 69.4245 18.4323 69.5234 18.0625C69.6276 17.6875 69.6797 17.2891 69.6797 16.8672V16.6875C69.6797 16.2708 69.6276 15.8776 69.5234 15.5078C69.4245 15.1328 69.2734 14.8021 69.0703 14.5156C68.8724 14.224 68.6224 13.9948 68.3203 13.8281C68.0234 13.6615 67.6745 13.5781 67.2734 13.5781C66.8776 13.5781 66.5286 13.6615 66.2266 13.8281C65.9297 13.9948 65.6797 14.224 65.4766 14.5156C65.2786 14.8021 65.1302 15.1328 65.0312 15.5078C64.9323 15.8776 64.8828 16.2708 64.8828 16.6875ZM74.3906 13.875V21H72.9453V12.5469H74.3516L74.3906 13.875ZM77.0312 12.5L77.0234 13.8438C76.9036 13.8177 76.7891 13.8021 76.6797 13.7969C76.5755 13.7865 76.4557 13.7812 76.3203 13.7812C75.987 13.7812 75.6927 13.8333 75.4375 13.9375C75.1823 14.0417 74.9661 14.1875 74.7891 14.375C74.612 14.5625 74.4714 14.7865 74.3672 15.0469C74.2682 15.3021 74.2031 15.5833 74.1719 15.8906L73.7656 16.125C73.7656 15.6146 73.8151 15.1354 73.9141 14.6875C74.0182 14.2396 74.1771 13.8438 74.3906 13.5C74.6042 13.151 74.875 12.8802 75.2031 12.6875C75.5365 12.4896 75.9323 12.3906 76.3906 12.3906C76.4948 12.3906 76.6146 12.4036 76.75 12.4297C76.8854 12.4505 76.9792 12.474 77.0312 12.5ZM83.5391 19.3594V9H84.9922V21H83.6641L83.5391 19.3594ZM77.8516 16.8672V16.7031C77.8516 16.0573 77.9297 15.4714 78.0859 14.9453C78.2474 14.4141 78.474 13.9583 78.7656 13.5781C79.0625 13.1979 79.4141 12.9062 79.8203 12.7031C80.2318 12.4948 80.6901 12.3906 81.1953 12.3906C81.7266 12.3906 82.1901 12.4844 82.5859 12.6719C82.987 12.8542 83.3255 13.1224 83.6016 13.4766C83.8828 13.8255 84.1042 14.2474 84.2656 14.7422C84.4271 15.237 84.5391 15.7969 84.6016 16.4219V17.1406C84.5443 17.7604 84.4323 18.3177 84.2656 18.8125C84.1042 19.3073 83.8828 19.7292 83.6016 20.0781C83.3255 20.4271 82.987 20.6953 82.5859 20.8828C82.1849 21.0651 81.7161 21.1562 81.1797 21.1562C80.6849 21.1562 80.2318 21.0495 79.8203 20.8359C79.4141 20.6224 79.0625 20.3229 78.7656 19.9375C78.474 19.5521 78.2474 19.099 78.0859 18.5781C77.9297 18.0521 77.8516 17.4818 77.8516 16.8672ZM79.3047 16.7031V16.8672C79.3047 17.2891 79.3464 17.6849 79.4297 18.0547C79.5182 18.4245 79.6536 18.75 79.8359 19.0312C80.0182 19.3125 80.25 19.5339 80.5312 19.6953C80.8125 19.8516 81.1484 19.9297 81.5391 19.9297C82.0182 19.9297 82.4115 19.8281 82.7188 19.625C83.0312 19.4219 83.2812 19.1536 83.4688 18.8203C83.6562 18.487 83.8021 18.125 83.9062 17.7344V15.8516C83.8438 15.5651 83.7526 15.2891 83.6328 15.0234C83.5182 14.7526 83.3672 14.513 83.1797 14.3047C82.9974 14.0911 82.7708 13.9219 82.5 13.7969C82.2344 13.6719 81.9193 13.6094 81.5547 13.6094C81.1589 13.6094 80.8177 13.6927 80.5312 13.8594C80.25 14.0208 80.0182 14.2448 79.8359 14.5312C79.6536 14.8125 79.5182 15.1406 79.4297 15.5156C79.3464 15.8854 79.3047 16.2812 79.3047 16.7031Z"
                fill="white"
              />
            </svg>
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
      <div className="container mx-auto">

      </div>
    </div>
  );
}
