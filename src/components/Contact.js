const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-400 rounded-md w-full"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 border border-gray-400 rounded-md w-full resize-none"
          />
          <button
            type="submit"
            className="bg-orange-400 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
