import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body || {};
  console.log("email", email);
  console.log("[debug] req.body:", req.body);
  console.log("[debug] req.files:", req.files);
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All the field Required");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(409, "User Already Exist");
  }
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  console.log("[debug] avatarLocalPath:", avatarLocalPath);
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar Required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = coverImageLocalPath
    ? await uploadOnCloudinary(coverImageLocalPath)
    : null;
  if (!avatar) {
    throw new ApiError(400, "Avatar file   Required");
  }
  console.log(avatar);

  const user = await User.create({
    fullName,
    email,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );
  if (!createdUser) {
    throw new ApiError(400, "Something went wrong registring the User");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registerd Successfully"));
});

export { registerUser };
