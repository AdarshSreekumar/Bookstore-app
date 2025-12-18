import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api : called by Auth component when register btn clicked
export const registerAPI=async(userDetails)=>{
   return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

// login: called by Auth component when login btn clicked
export const loginAPI=async(userDetails)=>{
   return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

// googlelogin: called by Auth component when login btn clicked
export const googleLoginAPI=async(userDetails)=>{
   return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

// user/book/add - addbook api : called by SellBook component when add book btn click
export const addBookAPI=async(reqBody,reqHeader)=>{
   return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}

///books/home :  homepage books api : called by home component when page loads
export const getHomePageBooksAPI=async()=>{
   return await commonAPI("GET",`${serverURL}/books/home`,{})
}

// /books/all : bookpage api : called by books component when page loads - unauthorise user
export const getAllBooksPageAPI=async(reqHeader,searchKey)=>{
   return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

// export aonst get/all : called by bookstatus when page load - authorised user
export const getAllUserBooksAPI=async(reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// export aonst get/all : called by bookstatus when page load - authorised user
export const getAllUserBoughtBooksAPI=async(reqHeader)=>{
   return await commonAPI("GET",`${serverURL}/user-boughtbooks/all`,{},reqHeader)
}

