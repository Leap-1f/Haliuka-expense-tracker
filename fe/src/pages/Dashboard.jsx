import { Navbar } from "../components/ui/index";

export default function Dashboard() {
  const createUser = async (event) => {
    event.preventDefault();

    let data = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      repassword: event.target[3].value,
    };

    const isValid = await userSchema.isValid(data);

    let formData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch("http://localhost:8080/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, id: uuidv4() }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Failed to create new user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* container */}
      <div className="bg-gray-100">
        <div className="container mx-auto pt-10">
          {/* Section 1 */}
          <div className="grid grid-cols-3 gap-6">
            {/* Credit Card - col1 */}
            <div className="rounded-xl">
              <img
                className="w-full h-full object-cover"
                src="https://golomtbank.com/wp-content/uploads/2020/06/card-platinum1.png"
                alt="golomt platinum card"
              />
            </div>
            {/* Income section - col2 */}
            <div className="bg-white rounded-xl">
              {/* top part */}
              <div className="flex gap-2 items-center border-b py-5 px-6">
                <div className="bg-success rounded w-2 h-2"></div>
                <p className="font-bold">Your income</p>
              </div>
              {/* bottom part */}
              <div className="py-5 px-6 flex flex-col justify-between">
                {/* amount */}
                <div>
                  <p></p>
                  <p>MNT</p>
                </div>
                <p className="text-neutral">Your income amount</p>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z"
                      fill="#84CC16"
                    />
                  </svg>
                  <p>32% from last month</p>
                </div>
              </div>
            </div>
            {/* Expense section - col3 */}
            <div className="bg-white rounded-xl">
              {/* top part */}
              <div className="flex gap-2 items-center border-b py-5 px-6">
                <div className="bg-primary rounded w-2 h-2"></div>
                <p className="font-bold">Total expenses</p>
              </div>
              {/* bottom part */}
              <div className="py-5 px-6 flex flex-col justify-between">
                {/* amount */}
                <div>
                  <p></p>
                  <p>MNT</p>
                </div>
                <p className="text-neutral">Your expense amount</p>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97981 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43734 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46927 3.74215 8.20656 2.81355 10.0979 2.43734C11.9892 2.06114 13.9496 2.25422 15.7312 2.99218C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7473 14.585 20.7192 17.0634 18.8913 18.8913C17.0634 20.7192 14.585 21.7473 12 21.75ZM15.5306 12.2194C15.461 12.1496 15.3783 12.0943 15.2872 12.0566C15.1962 12.0188 15.0986 11.9994 15 11.9994C14.9014 11.9994 14.8038 12.0188 14.7128 12.0566C14.6217 12.0943 14.539 12.1496 14.4694 12.2194L12.75 13.9397V8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25V13.9397L9.53063 12.2194C9.3899 12.0786 9.19902 11.9996 9 11.9996C8.80098 11.9996 8.61011 12.0786 8.46938 12.2194C8.32864 12.3601 8.24958 12.551 8.24958 12.75C8.24958 12.949 8.32864 13.1399 8.46938 13.2806L11.4694 16.2806C11.539 16.3504 11.6217 16.4057 11.7128 16.4434C11.8038 16.4812 11.9014 16.5006 12 16.5006C12.0986 16.5006 12.1962 16.4812 12.2872 16.4434C12.3783 16.4057 12.461 16.3504 12.5306 16.2806L15.5306 13.2806C15.6004 13.211 15.6557 13.1283 15.6934 13.0372C15.7312 12.9462 15.7506 12.8486 15.7506 12.75C15.7506 12.6514 15.7312 12.5538 15.6934 12.4628C15.6557 12.3717 15.6004 12.289 15.5306 12.2194Z"
                      fill="#0166FF"
                    />
                  </svg>
                  <p>32% from last month</p>
                </div>
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="border-b">Income - Expense</div>
            <div>{/* <BarChart></BarChart> */}</div>
          </div>
          {/* Section 3 */}
          <div className="bg-white rounded-xl">
            <div className="p-6">Last Records</div>
            <div className="px-6">
              <div className="flex justify-between items-center border-b">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full bg-primary h-fit w-fit p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Lending & Renting</p>
                    <p>3 hours ago</p>
                  </div>
                </div>
                <div>1,000₮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
