import SelectedClassRow from "./SelectedClassRow";


const MySelectedClasses = () => {

    const arr = [1, 2, 3, 4, 5, 6]

    return (
        <div>
            <h1 className="text-2xl text-black text-center font-bold bg-cyan-100 p-10 mb-4">My Selected Classes</h1>
            <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th>Seat</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        arr.map((item, index) => <SelectedClassRow key={index} index={index}></SelectedClassRow>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MySelectedClasses;