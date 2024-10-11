import { React, useState } from 'react';
import { IoImageOutline } from 'react-icons/io5';
import { imageUpload } from '../api/imageUploader';
import useProducts from '../hooks/useProducts';

const FormField_CLASS = 'grid grid-cols-4 border-[1px] p-2 mb-2';

export default function UploadProduct() {
  const [product, setProduct] = useState({ color: 'white' });
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { addProductMutation } = useProducts();

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const getFile = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    imageUpload(file)
      .then((imgUrl) => {
        addProductMutation.mutate(
          { product, imgUrl },
          {
            onSuccess: () => {
              setIsSuccess(true);
              setTimeout(() => {
                setIsSuccess(null);
              }, 3000);
            },
          }
        );
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl text-center my-10'>상품 등록</h1>
      <section className='flex-col gap-3 justify-center max-w-screen-lg px-4'>
        <div className='flex gap-2'>
          <div className='w-[250px] max-h-[350px] mb-2 overflow-hidden'>
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt='product'
                className='w-full'
              />
            )}
            {!file && (
              <div className='w-full h-full bg-gray-100 text-slate-300 flex flex-col items-center justify-center'>
                <IoImageOutline className='text-7xl' />
                <p>이미지 미리보기</p>
              </div>
            )}
          </div>
          <form id='newProduct' onSubmit={handleSubmit} className='flex-1'>
            <div className={FormField_CLASS}>
              <label>이미지 파일</label>
              <input
                type='file'
                accept='image/*'
                name='file'
                onChange={getFile}
                required
                className='col-span-3'
              />
            </div>
            <div className={FormField_CLASS}>
              <label htmlFor='title'>상품명</label>
              <input
                type='text'
                id='title'
                name='title'
                placeholder='상품명'
                value={product.title ?? ''}
                onChange={handleProductChange}
                required
                className='col-span-3'
              />
            </div>
            <div className={FormField_CLASS}>
              <label htmlFor='price'>가격</label>
              <input
                type='number'
                id='price'
                name='price'
                placeholder='가격'
                value={product.price ?? ''}
                onChange={handleProductChange}
                required
                className='col-span-3'
              />
            </div>
            <div className={`flex ${FormField_CLASS}`}>
              <label className='block'>색상</label>
              <div className='flex gap-1'>
                {/* white 라디오 버튼 */}
                <input
                  type='radio'
                  id='white'
                  name='color'
                  value='white'
                  checked={product.color === 'white'}
                  onChange={handleProductChange}
                  required
                  className='hidden'
                />
                <label
                  htmlFor='white'
                  className={`cursor-pointer w-12 h-full bg-white border-[3px] border-gray-300 ${
                    product.color === 'white' ? 'border-red-500' : ''
                  } `}
                ></label>
                {/* black 라디오 버튼 */}
                <input
                  type='radio'
                  id='black'
                  name='color'
                  value='black'
                  checked={product.color === 'black'}
                  onChange={handleProductChange}
                  required
                  className='hidden'
                />
                <label
                  htmlFor='black'
                  className={`cursor-pointer w-12 h-full bg-black border-[3px] border-gray-300 ${
                    product.color === 'black' ? 'border-red-500' : ''
                  } `}
                ></label>
              </div>
            </div>
            <div className={FormField_CLASS}>
              <label htmlFor='category'>카테고리</label>
              <input
                type='text'
                id='category'
                name='category'
                placeholder='카테고리'
                value={product.category ?? ''}
                onChange={handleProductChange}
                required
                className='col-span-3'
              />
            </div>
            <div className={FormField_CLASS}>
              <label htmlFor='description'>설명</label>
              <input
                type='text'
                id='description'
                name='description'
                placeholder='설명'
                value={product.description ?? ''}
                onChange={handleProductChange}
                required
                className='col-span-3'
              />
            </div>
            <div className={FormField_CLASS}>
              <label htmlFor='option'>옵션</label>
              <input
                type='text'
                id='option'
                name='option'
                placeholder='콤마(,)로 구분해서 입력하세요.'
                value={product.option ?? ''}
                onChange={handleProductChange}
                required
                className='col-span-3'
              />
            </div>
          </form>
        </div>
        {isSuccess && <p>✅제품이 추가되었습니다!</p>}
        <button
          type='submit'
          form='newProduct'
          className='bg-blue-300 w-full py-2 font-semibold text-lg rounded-md'
        >
          {isLoading ? '업로드 중...' : '상품 등록하기'}
        </button>
      </section>
    </div>
  );
}
