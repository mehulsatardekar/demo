import React from "react";
import { useToast } from "../index";

const useCloudinaryUtility = () => {
  const { notifyError, notifySuccess } = useToast();

  const uplaodImageVideo = async (
    file: File,
    setMediaurl: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    const mediaType = file.type.split("/")[0];
    if (mediaType === "video" && Math.round(file.size / 1024000) > 15)
      notifyError("Video size should be less than 10MB");
    else if (Math.round(file.size / 1024000) > 5)
      notifyError("Image size should be less than 4MB");
    else {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "mehulcloudinary");
      const requestOptions = {
        method: "POST",
        body: data,
      };
      const url =
        mediaType === "video"
          ? "https://api.cloudinary.com/v1_1/dwhsfh3sc/video/upload"
          : "https://api.cloudinary.com/v1_1/dwhsfh3sc/image/upload";
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          setMediaurl(json.url);
          return [json.secure_url, json.delete_token];
        })
        .catch((error) => {
          console.error(error);
          notifyError("File uploading failed on server please try later");
        });
    }
  };

  return { uplaodImageVideo };
};

export { useCloudinaryUtility };
