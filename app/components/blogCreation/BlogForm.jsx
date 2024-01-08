import Image from "next/image";
import CameraSVG from "../../../public/images/camera.svg";

export default function BlogForm(props) {
  return (
    <form
      id="form"
      onSubmit={props.onFormSubmit}
      encType="multipart/form-data"
      className="flex flex-col justify-between"
    >
      {/* Container Form Textfields */}
      <div className="flex flex-col justify-center text-left">
        <h1
          className="text-headerText font-bold text-left
              text-2xl !leading-[29px] tracking-[0]
              lg:text-3xl
              md:text-2xl
              sm:text-xl sm:!leading-[20px]"
        >
          Plaats een blog bericht
        </h1>

        {/* Field 1 - TITLE */}
        <div
          className="flex flex-col 
          h-[62px] mt-[24px]
          lg:mb-10 lg:mt-[20px]
          xs:h-[45px] xs:mb-8"
        >
          <label
            htmlFor="title"
            className="text-labelText font-normal tracking-[0]
                h-[15px] text-xs !leading-[13px]
                lg:text-lg
                md:text-sm"
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
            className="text-inputText bg-backGround tracking-[0] italic 
              h-[39px] text-xs !leading-[15px] mt-[8px] py-[12px] px-[16px]
              lg:text-sm lg:mt-[10px] lg:py-[24px]
              md:text-xs md:mt-[8px] md:py-[12px]
              xs:h-[34px] xs:!leading-[10px] xs:py-[10px] xs:px-[10px]"
          />
        </div>

        {/* Field 2 - CATEGORY */}
        <div
          className="flex flex-col 
          h-[62px] mt-[24px]
          lg:mb-10 lg:mt-[20px]
          xs:h-[45px] xs:mb-8"
        >
          <label
            htmlFor="category_id"
            className="text-labelText font-normal tracking-[0]
              h-[15px] text-xs !leading-[13px]
              lg:text-lg
              md:text-sm"
          >
            Categorie
          </label>
          <select
            id="category_id"
            type="type"
            name="category_id"
            required
            placeholder="Geen categorie"
            value={props.category_id}
            onChange={props.onSelectCategory}
            className="text-inputText bg-backGround tracking-[0] italic
              h-[39px] text-xs !leading-[15px] mt-[8px] py-[12px] px-[16px]
              lg:text-sm lg:mt-[10px]
              md:text-xs md:mt-[8px] md:py-[12px]
              xs:h-[34px] xs:!leading-[10px] xs:py-[10px] xs:px-[10px]"
          >
            <option value={1}>Tech</option>
            <option value={2}>Nieuws</option>
            <option value={3}>Sports</option>
            <option value={4}>Lokaal</option>
          </select>
        </div>

        {/* Field 3 - IMAGE UPLOAD */}
        <div
          className="flex flex-col 
            h-[62px] mt-[24px]
            lg:mb-10 lg:mt-[20px]
            xs:h-[45px] xs:mb-8"
        >
          <label
            htmlFor="image"
            className="text-labelText font-normal tracking-[0]
              h-[15px] text-xs !leading-[13px]
              lg:text-lg
              md:text-sm"
          >
            Header afbeelding
          </label>
          {/* Container Bestandsknop & Camera Button */}
          <div
            className="relative flex justify-between items-center 
            mt-[8px]
            lg:mt-[10px] "
          >
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={props.onImageChange}
              className="text-inputText bg-backGround tracking-[0] italic
                h-[39px] text-xs !leading-[15px] py-[8px] pl-[44px] pr-[16px]
                lg:text-sm 
                xs:h-[34px] xs:!leading-[13px]"
            />
            <Image
              src={CameraSVG}
              alt="Camera Activation Button"
              width={15}
              height={45}
              className="absolute mx-[16px]"
            />
          </div>
        </div>

        {/* Field 4 - MESSAGE */}
        <div
          className="flex flex-col 
          h-[237px] mt-[24px]
          lg:mb-10 lg:mt-[20px]
          xs:h-[175px] xs:mb-8"
        >
          <label
            htmlFor="content"
            className="text-labelText font-normal tracking-[0]
              h-[15px] text-xs !leading-[13px]
              lg:text-lg
              md:text-sm"
          >
            Bericht
          </label>
          <textarea
            id="content"
            type="text"
            name="content"
            required
            rows="6"
            placeholder="What's on your mind? Type it!"
            value={props.content}
            onChange={props.onMessageChange}
            className="text-inputText bg-backGround tracking-[0] italic
              h-[214px] text-xs !leading-[15px] mt-[8px] py-[12px] px-[16px]
              lg:text-sm lg:mt-[10px] lg:py-[24px]
              md:text-xs md:mt-[8px] md:py-[12px]
              xs:h-[195px] xs:!leading-[10px] xs:py-[10px] xs:px-[10px]"
          ></textarea>
        </div>

        {/* Create/Submit Button */}
        <div
          className="relative flex justify-center items-center bottom-0 
          mt-[24px]
          lg:mt-[20px]
          xs:mt-[16px]"
        >
          <button
            type="submit"
            value="Upload"
            disabled={props.isLoading}
            className="rounded-[20px] bg-customBtn text-light font-bold tracking-[0]
                hover:bg-light hover:text-customBtn hover:border-customBtn
                transition-all duration-[350ms] ease-in-out
                border-solid border-[1px] border-transparent
                w-[202px] h-[39px] text-xs !leading-[15px]
                lg:w-[185px] lg:h-[42px] lg:text-sm
                sm:w-[150px] sm:h-[34px]"
          >
            Bericht aanmaken
          </button>
          <div
            className="relative flex justify-end bottom-0 text-[black] z-30
              text-sm"
          >
            <i>{props.validation}</i>
          </div>
        </div>
      </div>

      {props.successMessage && (
        <p
          className="absolute text-center rounded-xl bg-customBtn/80 text-light font-semibold tracking-wide z-20
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            9xl:text-7xl 9xl:w-1/3 9xl:px-16 9xl:py-32
            8xl:text-6xl 8xl:px-14 8xl:py-28
            7xl:text-5xl
            5xl:text-4xl 5xl:px-12 5xl:py-24
            3xl:text-lg 3xl:p-16
            lg:text-lg
            lg:text-[15px] lg:top-1/4 lg:-translate-y-1/4 lg:w-1/2 lg:p-4"
        >
          {props.successMessage}
        </p>
      )}
    </form>
  );
}
