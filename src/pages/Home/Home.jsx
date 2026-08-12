import { useEffect, useMemo, useState } from "react";
import { HomeOverview } from "./elements/HomeElements";
import './Home.css'
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

function Home() {
  return <><HomeOverview /><Footer /></>
}

export default Home
