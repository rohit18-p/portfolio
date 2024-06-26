import React, { useState } from "react";
import Navbar from "../utils/headFoot/Navbar";
import Footer from "../utils/headFoot/Footer";
import "./main.scss";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { Fade, Zoom, Slide, Bounce, Roll } from "react-awesome-reveal";
import Contact from "./components/Contact";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Main() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <main className="main-content">
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>IMPORTANT</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Website Development is an progress, In some days it will be a
              fully dynamic website
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} variant="contained">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Navbar />
        <div className="main-section">
          <div id="home" className="main-div">
            <Fade duration={1500}>
              <Home />
            </Fade>
          </div>
          <div id="about" className="main-div">
            <Zoom>
              <About />
            </Zoom>
          </div>
          <div id="skills" className="main-div">
            <Slide direction="left">
              <Skills />
            </Slide>
          </div>
          <div id="project" className="main-div">
            <Bounce>
              <Project />
            </Bounce>
          </div>
          <div id="education" className="main-div">
            <Roll>
              <Education />
            </Roll>
          </div>
          <div id="contact" className="main-div">
            <Slide direction="right">
              <Contact />
            </Slide>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Main;
