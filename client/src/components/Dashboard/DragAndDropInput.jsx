import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';

function DragAndDropInput(props) {
    const setupload = props.setupload;
    const upload = props.upload;
    const Name= props.Name;
    const onDrop = useCallback(acceptedFiles => {
        // Handle file upload
        setupload(acceptedFiles);
    }, [setupload]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <label htmlFor='upload' className='text-white'>{Name} <sup className='text-pink-200'>*</sup></label>
            <div {...getRootProps()} id='upload' className="flex flex-col w-full items-center p-6 rounded-xl border border-richblack-600">

                <input {...getInputProps()} />


                <div className='w-full flex flex-col items-center justify-center'>
                    <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-600">
                        <FiUploadCloud className="text-2xl text-yellow-50" />
                    </div>
                    <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
                        Drag and drop or click to{" "}
                        <span className="font-semibold text-yellow-100">Browse</span> a
                        file
                    </p>
                    <ul className="mt-2 flex list-disc justify-between space-x-12 text-center  text-xs text-pink-400">
                        <li>JPEG / JPG</li>
                        <li>Recommended size 1024x576</li>
                    </ul>
                </div>
                < div



                    className='text-richblack-25 font-bold'>{upload.length > 0 && (upload[0].name)}


                </div>

            </div >
        </div>
    );
}

export default DragAndDropInput;
