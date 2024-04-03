import User from "./user.jsx";
import photo from "/Users/Luis/Downloads/code/New folder/Twitter card/images/toni.jpg";
import photo2 from "../images/realMadrid.webp";
import photo3 from "../images/cat.jpg";
import photo4 from "../images/car.jpg";
function Card() {
  function formattedHandle(handle) {
    return `@${handle}`;
  }
  return (
    <div class="bg-background-c h-screen flex justify-center items-center sm:min-w-max">
      <main className="bg-backg  py-8 max-w-full  rounded-xl ">
        <h1 className="text-white text-4xl font-bold px-8">Who to follow</h1>
        <article className="py-8 ">
          <User
            name={"Luis Soriano"}
            handle={formattedHandle("LuisX")}
            photo={photo}
            isfollowing={false}
          />
          <User
            name={"Rodrygo Goes"}
            handle={formattedHandle("RodrygoGoes")}
            photo={photo4}
            isfollowing={true}
          />
          <User
            name={"Elon Musk"}
            handle={formattedHandle("ElonMusk")}
            photo={photo3}
            isfollowing={false}
          />
          <User
            name={"Fortnite"}
            handle={formattedHandle("FortniteGame")}
            photo={photo2}
            isfollowing={true}
          />
        </article>
      </main>
    </div>
  );
}

export default Card;
