import { Card, CardContent } from "@mui/material";
import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from "react-admin";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const FilterSidebarVehi = () => (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
        <CardContent>
            <SavedQueriesList />
            <FilterLiveSearch />
            <FilterList label="Category" icon={<CategoryIcon />}>
                <FilterListItem label="No disponible" value={{ availability: "noActive" }} />
            </FilterList>
        </CardContent>
    </Card>
);