export default useImageLibrary = () => {
	useEffect(() => {
		requestPermission();
	}, []);

	const requestPermission = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
	};
};
