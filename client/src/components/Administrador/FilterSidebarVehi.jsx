import { Card, CardContent } from "@mui/material";
import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const FilterSidebarVehi = () => (
    <Card>
        <CardContent>
            <SavedQueriesList />
            <FilterLiveSearch />
            <FilterList label="Category" icon={<CategoryIcon />}>
                <FilterListItem label="No disponible" value={{ availability: "noActive" }} />
            </FilterList>
        </CardContent>
    </Card>
);