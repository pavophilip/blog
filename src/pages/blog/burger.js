import { useEffect, useState } from "react";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((open) => !open);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BurgerMenu isOpen={isOpen} />
      </div>
    </>
  );
};

export default Burger;
