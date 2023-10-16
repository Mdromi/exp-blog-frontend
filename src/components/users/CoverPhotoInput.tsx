import {
    PhotoIcon,
  } from "@heroicons/react/24/solid";
interface CoverPhotoInputProps {
    id: string;
    label: string;
  }
const CoverPhotoInput: React.FC<CoverPhotoInputProps> = ({ id, label }) => {
    return (
      <div className="col-span-full">
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-accent-content">
          {label}
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-accent-content/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-accent-content">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-base-100 font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-focus focus-within:ring-offset-2 hover:text-primary-focus"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-accent-content">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    );
  };
export default CoverPhotoInput