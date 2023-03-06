import React, { useState } from "react";
import "./Log.css";
import gpt_icon from "../../assets/gpt-3.png";

function Log() {

    return (
        <div className="max-w-4xl h-full flex flex-col justify-end items-stretch border-2 border-gray-700 m-3">
            <div className="flex flex-col">
                <div className="flex flex-row items-center m-3">
                    <img className="w-10 h-10 m-2" src={gpt_icon} alt="avatar" />
                    <span>How can I help you today?</span>
                </div>
                <div className="flex flex-row items-center justify-end m-3">
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <img className="w-10 h-10 m-2" src={gpt_icon} alt="avatar" />
                </div>
                <div>
                </div>
            </div>

        </div>
    );
}

export default Log;