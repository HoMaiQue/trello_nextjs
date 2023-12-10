import { Routes } from "@/constants/route";
import { OrganizationList } from "@clerk/nextjs";

const CreateOrganizationPage = () => {
    return (
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl={Routes.ORGANIZATION}
            afterCreateOrganizationUrl={Routes.ORGANIZATION}
        />
    );
};

export default CreateOrganizationPage;
