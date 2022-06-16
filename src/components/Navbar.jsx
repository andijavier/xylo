import { useState } from 'react'
import { Icon } from '@iconify/react';

function Navbar() {

  return (
    <nav className=" bg-dark">
      <div className="d-flex fixed-top justify-content-between container-fluid">
        <div className="btn nav" data-bs-toggle="modal" data-bs-target="#exampleModal"><Icon icon="bx:search" /></div>
        <div className="btn daniel">Daniel</div>
        <div className="btn nav">Subscribe</div>
      </div>
      {/* Search Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Quickly find episodes, articles,
                and pages across the website.
              </h5>
            </div>
            <div className="modal-body">
              <div className="col-12">
                <Icon className="searchIcon" height="1.5rem" icon="bx:search" />
                <input className="searchInput" placeholder="Search..." type="text" />
              </div>
              <button className="col-12 btn btnSearch">Search</button>
            </div>
            <div className="modal-footer justify-content-center">
              <div className="col text-center">
                <div className="icon">
                  <Icon height="30px" width="30px" icon="icomoon-free:fire" />
                </div>
                <p className="mb-0">Popular</p>
              </div>
              <div className="col text-center">
                <div className="icon">
                  <Icon icon="ant-design:clock-circle-filled"  height="30px" width="30px" color="white" />
                </div>
                <p className="mb-0">Recent</p>
              </div>
              <div className="col text-center">
                <div className="icon">
                  <Icon icon="carbon:collapse-all"  height="30px" width="30px" color="white" />
                </div>
                <p className="mb-0">Browse All</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 justify-content-center menu">
        <div className="col btn dropbtn text-center">Podcast</div>
        <div className="col btn dropbtn text-center">Newsletter</div>
        <div className="col btn dropbtn text-center">Topics & Tags</div>
        <div className="col btn text-white text-center dropdown">
          <button className="dropbtn">More</button>
          <div className="dropdown-content">
            <a href="#">About</a>
            <a href="#">Newsroom</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar