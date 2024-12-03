const rootDir = "/";

const resolveAsset = (
    identifier: string
) => {
    return (rootDir + identifier);
};

export default resolveAsset;
