const rootDir = "../../public/";

const resolveAsset = (
    identifier: string
) => {
    return (rootDir + identifier);
};

export default resolveAsset;
