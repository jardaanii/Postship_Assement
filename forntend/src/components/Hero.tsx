import { HeroCard } from "../components/HeroCard";

export const Hero = ({ n }: { n?: string }) => {
  return (
    <div className="h-99">
      <div className="ml-27 mt-20 text-4xl text-custom-search-gray font-bold">
        {`Welcome, ${n ? n : "John Mathew"}!!`}
      </div>
      <div className=" h-72 ml-20 my-10 w-102  flex justify-around">
        <HeroCard
          borderColor="border-custom-nav-line-gray"
          title="Order Sync Successful!"
          titleColor="text-custom-search-gray"
          content="Your order details from the last 30 days have been successfully synced. Check them out now! "
          button1Content="Explore Your Orders"
        />

        <HeroCard
          borderColor="border-custom-hero-text-yellow "
          bgColor="bg-custom-hero-yellow"
          title="Customize Customer Notification"
          svgIcon=<svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99994 6.75C10.4142 6.75 10.7499 7.08579 10.7499 7.5V11C10.7499 11.4142 10.4142 11.75 9.99994 11.75C9.58573 11.75 9.24994 11.4142 9.24994 11V7.5C9.24994 7.08579 9.58573 6.75 9.99994 6.75Z"
              fill="#4A4A4A"
            />
            <path
              d="M11 13.5C11 14.0523 10.5523 14.5 10 14.5C9.44772 14.5 9 14.0523 9 13.5C9 12.9477 9.44772 12.5 10 12.5C10.5523 12.5 11 12.9477 11 13.5Z"
              fill="#4A4A4A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 3.5C8.95471 3.5 8.21616 4.20232 7.84762 4.94672C7.65565 5.33448 6.75984 7.0441 5.84305 8.79353L5.81531 8.84646C4.9229 10.5493 4.01714 12.2777 3.80716 12.702C3.4351 13.4537 3.32931 14.4519 3.89953 15.316C4.46911 16.1791 5.44222 16.5 6.36356 16.5L13.6364 16.5C14.5577 16.5 15.5308 16.1791 16.1004 15.316C16.6707 14.4519 16.5649 13.4537 16.1928 12.702C15.9832 12.2784 15.08 10.555 14.1889 8.85476L14.1569 8.79352C13.24 7.044 12.3443 5.33454 12.1524 4.94693C11.784 4.20242 11.0454 3.5 10 3.5ZM9.1919 5.61225C9.59605 4.79592 10.4041 4.79592 10.8081 5.61225C11.0102 6.02061 11.9201 7.75686 12.8296 9.49243C13.7383 11.2262 14.6466 12.9594 14.8485 13.3673C15.2525 14.1837 14.8485 15 13.6364 15L6.36356 15C5.1515 15 4.74746 14.1837 5.1515 13.3673C5.35376 12.9587 6.26468 11.2205 7.1748 9.4838C8.08283 7.75111 8.99005 6.01994 9.1919 5.61225Z"
              fill="#4A4A4A"
            />
          </svg>
          titleColor="text-custom-hero-text-yellow"
          content="Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers"
          button1Content="Configure Notifications"
        />
        <HeroCard
          borderColor="border-custom-nav-line-gray"
          bgColor="bg-custom-hero-blue"
          title="Your Tracking Link has been generated"
          svgIcon=<svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99998 14C9.58577 14 9.24999 13.6642 9.25 13.25L9.25006 9.74999C9.25007 9.33577 9.58586 8.99999 10.0001 9C10.4143 9.00001 10.7501 9.3358 10.7501 9.75001L10.75 13.25C10.75 13.6642 10.4142 14 9.99998 14Z"
              fill="#4A4A4A"
            />
            <path
              d="M9 7C9 6.44772 9.44772 6 10 6C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8C9.44772 8 9 7.55228 9 7Z"
              fill="#4A4A4A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z"
              fill="#4A4A4A"
            />
          </svg>
          titleColor="text-custom-search-gray"
          content={
            <span>
              Include the{"   "}
              <a href="#" className="text-blue-500">
                Link
              </a>
              {"  "}
              to Your Store's Navigation Menu.
            </span>
          }
          button1Content="Go To Navigation Menu"
          button2Content="Copy Link"
        />
      </div>
      <div></div>
    </div>
  );
};
