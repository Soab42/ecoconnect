import AirPollution from "./components/AirPollution";
import Location from "./components/Location";
import Temperature from "./components/Temperature";
import Weather from "./components/Weather";
import Wind from "./components/Wind";

export default function Home() {
  return (
    <main class="!z-50 w-full">
      <div class="container">
        <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
          {/* <!--  --> */}
          <Location />

          {/* <!--  --> */}
          {/* <!-- Current Weather --> */}

          <Weather />
          {/* <!-- Current Weather Ends --> */}
          {/* <!-- Air Pollution & Quality --> */}
          <AirPollution />
          {/* <!-- Air Pollution & Quality Ends --> */}

          {/* <!-- wind --> */}
          <Wind />
          {/* <!--  --> */}

          {/* <!-- current temp  --> */}
          <Temperature />
          {/* <!--  --> */}
        </div>
      </div>
    </main>
  );
}
