import { Checkbox, Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";

export default function Register() {
  return (
    <>
      <div className="w-full h-screen flex flex-row bg-white">
        <div className="relative bg-[#D1222A] w-5/12 h-screen">
          <div className="p-8">
            <CustomImage src="/images/logo.svg" className="h-16"></CustomImage>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3">
            <CustomImage src="/images/RegisterImage.svg"></CustomImage>
          </div>
        </div>
        <div className="w-7/12">
          <div className="text-sm text-[#5E5E5E] text-right p-10">
            Have a Account?{" "}
            <i
              className=" text-black font-bold cursor-pointer"
              onClick={() => {
                console.log("sign up");
              }}
            >
              Sign In
            </i>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="text-3xl text-black font-bold pb-4">
                Sign up & Join with us
              </div>
              <div className="flex flex-row w-full justify-between pb-2">
                <CustomImage src="/images/LoginFaceBtn.svg" className="" />
                <CustomImage src="/images/LoginGBtn.svg" />
                <CustomImage src="/images/LoginTwiBtn.svg" />
              </div>
              <div className="pb-2">
                <CustomImage src="/images/LoginOrImage.svg" />
              </div>
              <div className="text-base text-[#333333] pb-2">Full name</div>
              <div className="pb-2">
                <input
                  placeholder="John"
                  className="w-full border border-[#E9E9E9] bg-[#F0F1F2] rounded-md py-2 px-4"
                ></input>
              </div>
              <div className="text-base text-[#333333] pb-2">Email address</div>
              <div className="pb-2">
                <input
                  placeholder="example@gmail.com"
                  className="w-full border border-[#E9E9E9] bg-[#F0F1F2] rounded-md py-2 px-4"
                ></input>
              </div>

              <div className="text-base text-[#333333] pb-2">Password</div>
              <div className="pb-4">
                <input
                  placeholder="......"
                  className="w-full border border-[#E9E9E9] bg-[#F0F1F2] rounded-md py-2 px-4"
                ></input>
              </div>
              <div className="text-base text-[#333333] pb-2">
                Confirm Password
              </div>
              <div className="pb-2">
                <input
                  placeholder="......"
                  className="w-full border border-[#E9E9E9] bg-[#F0F1F2] rounded-md py-2 px-4"
                ></input>
              </div>
              <div className="pb-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label className="pl-2">
                  Creating an account means you're okay with our Terms of
                  Service, Privacy Policy, and our default Notification Settings
                </label>
              </div>
              <div>
                <CustomImage src="/images/CreateAccountBtn.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
