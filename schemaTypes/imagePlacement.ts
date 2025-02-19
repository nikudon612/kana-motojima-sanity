import DraggableImageEditor from '../components/DraggableImageEditor'

export default {
    name: "imagePlacement",
    title: "Image Placement",
    type: "document",
    fields: [
      {
        name: "images",
        title: "Placed Images",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "photo",
                title: "Photo",
                type: "reference",
                to: [{ type: "photo" }],
              },
              { name: "x", title: "X Position", type: "number", initialValue: 0 },
              { name: "y", title: "Y Position", type: "number", initialValue: 0 },
              { name: "width", title: "Width", type: "number", initialValue: 150 },
              { name: "height", title: "Height", type: "number", initialValue: 200 },
              { name: "zIndex", title: "Z-Index", type: "number", initialValue: 1 },
            ],
          },
        ],
        components: { input: DraggableImageEditor },
      },
    ],
  };
  
  
  
