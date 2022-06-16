import React from "react";
import { Icon } from '@iconify/react';

function Footer () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="my-2 p-1 card text-center">
              <div className="icon">
                <Icon height="30px" width="30px" color="white" icon="icomoon-free:fire" />
              </div>
              <p className="mb-0">Popular</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-2 p-1 card text-center">
              <div className="icon">
                <Icon icon="ant-design:clock-circle-filled"  height="30px" width="30px" color="white" />
              </div>
              <p className="mb-0">Recent</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-2 p-1 card text-center">
              <div className="icon">
                <Icon icon="carbon:collapse-all"  height="30px" width="30px" color="white" />
              </div>
              <p className="mb-0">Browse All</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer