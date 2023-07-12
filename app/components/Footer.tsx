import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <ul>
        <ul>
          <h5>Meta Open Source</h5>
          <li>@2023</li>
        </ul>
        <ul>
          <h5>Learn React</h5>
          <li>
            <h6>Quick Start</h6>
          </li>
          <li>
            <h6>Installation</h6>
          </li>
          <li>
            <h6>Describing the UI</h6>
          </li>
          <li>
            <h6>Adding Interactivity</h6>
          </li>
          <li>
            <h6>Managing State</h6>
          </li>
          <li>
            <h6>Escape Hatches</h6>
          </li>
        </ul>
        <ul>
          <h5>API Reference</h5>
          <li>
            <h6>React APIs</h6>
          </li>
          <li>
            <h6>React DOM APIs</h6>
          </li>
        </ul>
        <ul>
          <h5>Community</h5>
          <li>
            <h6>Code of Conduc</h6>
          </li>
          <li>
            <h6>Meet the Team</h6>
          </li>
          <li>
            <h6>Docs Contributors</h6>
          </li>
          <li>
            <h6>Acknowledgements</h6>
          </li>
        </ul>
        <ul>
          <h5>More</h5>
          <li>
            <h6>Blog</h6>
          </li>
          <li>
            <h6>React Native</h6>
          </li>
          <li>
            <h6>Privacy</h6>
          </li>
          <li>
            <h6>Terms</h6>
          </li>
        </ul>
      </ul>
      <div>
        <Link href={`/`}>
          <h5>facebook</h5>
        </Link>
        <Link href={`/`}>
          <h5>twitter</h5>
        </Link>
        <Link href={`/`}>
          <h5>github</h5>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
