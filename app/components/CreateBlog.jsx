import Image from "next/image";
import CameraSVG from "../../public/images/camera.svg";

export default function CreateBlog(props) {
  /* Activate Camera Capture */
  // const captureImageFromCamera = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  //     // Create a video element to display the camera feed
  //     const video = document.createElement("video");
  //     document.body.appendChild(video);
  //     video.srcObject = stream;
  //     await video.play();

  //     // Create a canvas element to capture the image
  //     const canvas = document.createElement("canvas");
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;

  //     // Capture the image
  //     const context = canvas.getContext("2d");
  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //     // Stop the camera stream
  //     stream.getVideoTracks()[0].stop();

  //     // Convert the canvas content to a data URL
  //     const imageBlob = await new Promise((resolve) => {
  //       canvas.toBlob(resolve, "image/jpeg");
  //     });

  //     // Now you can handle the captured image (e.g., upload it or display it)
  //   } catch (error) {
  //     console.error("Error capturing image from camera: ", error);
  //   }
  // };

  return (
    <form
      id="form"
      onSubmit={props.onFormSubmit}
      className="flex flex-col justify-between"
    >
      {/* Container Form Textfields */}
      <div className="flex flex-col">
        {/* Header Form Field */}
        <h1
          className="text-headerText font-bold text-left
              text-2xl !leading-[29px] tracking-[0]"
        >
          Plaats een blog bericht
        </h1>

        {/* Field 1 - TITLE */}
        <div className="flex flex-col h-[62px] mt-[24px]">
          {/* mb-[47px] */}
          <label
            htmlFor="title"
            className="text-labelText h-[15px] text-xs font-normal
              !leading-[13px] tracking-[0]"
          >
            Berichtnaam
          </label>
          <input
            id="title"
            type="text"
            name="title"
            required
            placeholder="Geen titel"
            value={props.title}
            onChange={props.onTitleChange}
            style={{ fontStyle: "italic", color: "#C5C5C5", fontSize: "12px" }}
            className="text-inputText h-[39px] text-xs 
              !leading-[15px] tracking-[0]
              mt-[8px]
              py-[12px] px-[16px]
              bg-backGround"
          />
        </div>

        {/* Field 2 - CATEGORY */}
        <div className="flex flex-col h-[62px] mt-[24px]">
          <label
            htmlFor="categorie"
            className="text-labelText h-[15px] text-xs font-normal
              !leading-[13px] tracking-[0]"
          >
            Categorie
          </label>
          <select
            id="categorie"
            name="type"
            required
            placeholder="Geen categorie"
            value={props.categorie_id}
            onChange={props.onSelectCategorie}
            style={{
              fontStyle: "italic",
              color: "#C5C5C5",
              fontSize: "12px",
            }}
            className="text-inputText h-[39px] text-xs
              !leading-[15px] tracking-[0]
              mt-[8px]
              py-[12px] px-[16px]
              bg-backGround"
          >
            <option value="1">Social Media</option>
            <option value="2">Life Style</option>
            <option value="3">Climate Change</option>
          </select>
        </div>

        {/* Field 3 - IMAGE UPLOAD */}
        <div className="flex flex-col h-[62px] mt-[24px]">
          <label
            htmlFor="headerImage"
            className="text-labelText h-[15px] text-xs font-normal
              !leading-[13px] tracking-[0]"
          >
            Header afbeelding
          </label>
          {/* Container Bestandsknop & Camera Button */}
          <div
            className="relative flex justify-between
              w-[146px] h-[39px]
              mt-[8px]"
          >
            <div className="relative flex items-center">
              <input
                id="headerImage"
                type="file"
                accept="image/*"
                required
                value={props.image}
                onChange={props.onImageChange}
                style={{
                  fontStyle: "italic",
                  color: "#C5C5C5",
                  fontSize: "10px",
                }}
                className="relative text-inputText  
                text-xs !leading-[15px] tracking-[0]
                py-[10px] pl-[44px] pr-[16px]
                bg-backGround"
              />
              {/* <button
                onClick={captureImageFromCamera}
                className="absolute ml-[16px]"
              >
                <Image
                  src={CameraSVG}
                  alt="Camera Activation Button"
                  width={20}
                  height={45}
                />
              </button> */}
            </div>
          </div>
        </div>

        {/* Field 4 - MESSAGE */}
        <div className="flex flex-col h-[237px] mt-[24px]">
          <label
            htmlFor="message"
            className="text-labelText h-[15px] text-xs font-normal
              !leading-[13px] tracking-[0]"
          >
            Bericht
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            required
            rows="6"
            placeholder="What's on your mind? Type it!"
            value={props.content}
            onChange={props.onMessageChange}
            style={{ fontStyle: "italic" }}
            className="text-inputText h-[214px] text-xs
              !leading-[15px] tracking-[0]
              mt-[8px]
              py-[12px] px-[16px]
              bg-backGround"
          ></textarea>
        </div>
      </div>

      {/* Create Button */}
      <div className="flex mt-[24px] justify-center items-center">
        <button
          type="submit"
          disabled={props.isLoading}
          className="w-[202px] h-[39px] rounded-[20px] bg-customBtn"
        >
          <h2
            className="text-light h-[15px] text-xs font-bold
              !leading-[15px] tracking-[0]"
          >
            Bericht aanmaken
          </h2>
        </button>
        {/* <div>
          <i>{props.validation}</i>
        </div> */}
      </div>

      {props.successMessage && (
        <p
        //   className="absolute text-center rounded-xl bg-light/70 text-dark
        // top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        // 9xl:text-7xl 9xl:w-1/3 9xl:px-16 9xl:py-32
        // 8xl:text-6xl 8xl:px-14 8xl:py-28
        // 7xl:text-5xl
        // 5xl:text-4xl 5xl:px-12 5xl:py-24
        // 3xl:text-lg 3xl:p-16
        // sm:text-[15px] sm:top-1/4 sm:-translate-y-1/4 sm:w-1/2 sm:p-4"
        >
          {props.successMessage}
        </p>
      )}
    </form>
  );
}
