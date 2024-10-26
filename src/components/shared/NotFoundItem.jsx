const NotFoundItem = ({ refetch }) => {
  return (
    <div className="  container mx-auto py-[50px] flex items-center justify-center flex-col">
      <p className="text-[34px] text-center font-semibold">No Item Found</p>
      {refetch && (
        <button
          onClick={refetch}
          className="bg-[#D87D4A] w-fit text-[#fff] px-[15px] py-[10px] hover:bg-[#fbaf85] text-[16px] transition-all"
        >
          Refresh
        </button>
      )}
    </div>
  );
};

export default NotFoundItem;
