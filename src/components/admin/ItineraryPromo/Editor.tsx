import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Dynamic import for Quill.js as it needs to be loaded on the client-side
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading editor...</p>, // Ensure loading state is visible
});

const Editor = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const [modules, setModules] = useState({});

    useEffect(() => {
        const initializeModules = () => {
            setModules({
                toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    ['link', 'image'] // Removed 'table' button from the toolbar
                ]
            });
        };

        initializeModules();
    }, []);

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    // Handle editor content change
    const handleEditorChange = (html) => {
        setEditorHtml(html);
        console.log("Here is your HTML:", html);
    };

    return (
        <div>
            <div>hello</div>
            <div className='w-full'>
                <QuillNoSSRWrapper
                    className='rounded h-60 mb-10'
                    theme="snow"
                    formats={formats}
                    value={editorHtml}
                    onChange={handleEditorChange}
                    modules={modules} // Pass dynamically set modules
                />
            </div>
        </div>
    );
};

export default Editor;
