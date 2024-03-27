import { motion, useAnimation } from "framer-motion";


export default function ImageBox() {

  const variant = {
    visible: {scale: 0.5},
    hidden: {scale: 0.2},
  }

  const images = {
    image_1:
    '/images/hero5.jpg'

  };

  return (
    <div>
      <motion.img
              src={images.image_1}
              variants={variant}
              initial="hidden"
              whileInView="visible"
            />
    </div>
  )
}



/*img src='/images/hero5.jpg' ref={ref}></img--*/