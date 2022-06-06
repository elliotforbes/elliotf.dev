import Image from 'next/image';

export function getStaticProps() {
  return { props: {
    images: [
      'https://media.elliotf.dev/2022/06/03/DSC00413.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00372.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00435.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00408.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00437.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00507.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00502.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00485.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00492.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00489.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00510.jpg',
      'https://media.elliotf.dev/2022/06/03/DSC00569.jpg'
    ]
  }}
}

export default function Gallery({images}) {
  return (
    <div>
      <h2 className="text-xl font-extrabold mb-8">My Super Awesome Gallery</h2>
      <div className="grid gap-2 grid-cols-4">
        <div>
          {images?.map((image) => (
            <Image  width="100%" height="100%" layout="responsive" objectFit="contain" className="mb-2" key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 0);
          })}
        </div>
        <div>
          {images?.map((image) => (
            <Image  width="100%" height="100%" layout="responsive" objectFit="contain" className="mb-2" key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 1);
          })}
        </div>
        <div>
          {images?.map((image) => (
            <Image  width="100%" height="100%" layout="responsive" objectFit="contain" className="mb-2" key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 2);
          })}
        </div>
        <div>
          {images?.map((image) => (
            <Image  width="100%" height="100%" layout="responsive" objectFit="contain" className="mb-2" key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 3);
          })}
        </div>
      </div>
    </div>
  )
}