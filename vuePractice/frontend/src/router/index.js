import AlertsEx from "@/views/AlertsEx.vue";
import ApplicationEx from "@/views/ApplicationEx.vue";
import AspectRatiosEx from "@/views/AspectRatiosEx.vue";
import AvatarEx from "@/views/AvatarEx.vue";
import AvatarEx2 from "@/views/AvatarEx2.vue";
import BadgesEx from "@/views/BadgesEx.vue";
import BannersEx from "@/views/BannersEx.vue";
import AppbarsEx from "@/views/AppbarsEx.vue";
import SystembarEx from "@/views/SystembarEx.vue";
import BottomNavigationEx from "@/views/BottomNavigationEx.vue";
import BottomNavigationEx2 from "@/views/BottomNavigationEx2.vue";
import BottomSheetsEx from "@/views/BottomSheetsEx.vue";
import BreadCrumbsEx from "@/views/BreadCrumbsEx.vue";
import ButtonsEx from "@/views/ButtonsEx.vue";
import CalendarsEx from "@/views/CalendarsEx.vue";
import CardsEx from "@/views/CardsEx.vue";
import CarouselsEx from "@/views/CarouselsEx.vue";
import ChipsEx from "@/views/ChipsEx.vue";
import DialogsEx from "@/views/DialogsEx.vue";
import DividersEx from "@/views/DividersEx.vue";
import ExpansionPanelsEx from "@/views/ExpansionPanelsEx.vue";
import FootersEx from "@/views/FootersEx.vue";
import AutoCompletesEx from "@/views/FormInputsAndControl/AutoCompletesEx.vue";
import CheckboxesEx from "@/views/FormInputsAndControl/CheckboxesEx.vue";
import FileInputsEx from "@/views/FormInputsAndControl/FileInputsEx.vue";
import FormsEx from "@/views/FormInputsAndControl/FormsEx.vue";
import RadioButtonsEx from "@/views/FormInputsAndControl/RadioButtonsEx.vue";
import RangeSlidersEx from "@/views/FormInputsAndControl/RangeSlidersEx.vue";
import SelectsEx from "@/views/FormInputsAndControl/SelectsEx.vue";
import SwitchesEx from "@/views/FormInputsAndControl/SwitchesEx.vue";
import TextAreasEx from "@/views/FormInputsAndControl/TextAreasEx.vue";
import GridSystemEx from "@/views/GridSystemEx.vue";
import HoverEx from "@/views/HoverEx.vue";
import ImagesEx from "@/views/ImagesEx.vue";
import ListsEx from "@/views/ListsEx.vue";
import SirteamPrac from "@/views/Clone/SirteamPrac.vue";
import OverlaysEx from "@/views/OverlaysEx.vue";
import PaginationEx from "@/views/PaginationEx.vue";
import ColorPickersEx from "@/views/Pickers/ColorPickersEx.vue";
import DatePickersEx from "@/views/Pickers/DatePickersEx.vue";
import TimePickersEx from "@/views/Pickers/TimePickersEx.vue";
import RatingsEx from "@/views/RatingsEx.vue";
import SheetsEx from "@/views/SheetsEx.vue";
import DataIteratorsEx from "@/views/Tables/DataIteratorsEx.vue";
import SimpleTablesEx from "@/views/Tables/SimpleTablesEx.vue";
import DataTablesEx from "@/views/Tables/DataTablesEx.vue";
import TabsEx from "@/views/TabsEx.vue";
import TooltipsEx from "@/views/TooltipsEx.vue";
import TreeviewEx from "@/views/TreeviewEx.vue";
import VirtualScrollerEx from "@/views/VirtualScrollerEx.vue";

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    //alerts
    path: "/alertsEx",
    name: "AlertsEx",
    component: AlertsEx,
  },
  {
    //application
    path: "/applicationEx",
    name: "ApplicationEx",
    component: ApplicationEx,
  },
  {
    //aspect ratios
    path: "/aspectRatiosEx",
    name: "AspectRatiosEx",
    component: AspectRatiosEx,
  },
  {
    //avatar
    path: "/avatarEx",
    name: "AvatarEx",
    component: AvatarEx,
  },
  {
    //avatar2
    path: "/avatarEx2",
    name: "AvatarEx2",
    component: AvatarEx2,
  },
  {
    //badges
    path: "/badgesEx",
    name: "BadgesEx",
    component: BadgesEx,
  },
  {
    //banners
    path: "/bannersEx",
    name: "BannersEx",
    component: BannersEx,
  },
  {
    //app bars
    path: "/appbarsEx",
    name: "AppbarsEx",
    component: AppbarsEx,
  },
  {
    //system bar
    path: "/systembarEx",
    name: "SystembarEx",
    component: SystembarEx,
  },
  {
    //bottom navigation
    path: "/bottomNavigationEx",
    name: "/BottomNavigationEx",
    component: BottomNavigationEx,
  },
  {
    //bottom navigation2
    path: "/bottomNavigationEx2",
    name: "/BottomNavigationEx2",
    component: BottomNavigationEx2,
  },
  {
    //bottom sheets
    path: "/bottomSheetsEx",
    name: "BottomSheetsEx",
    component: BottomSheetsEx,
  },
  {
    //bread crumbs
    path: "/breadCrumbsEx",
    name: "BreadCrumbsEx",
    component: BreadCrumbsEx,
  },
  {
    //buttons
    path: "/buttonsEx",
    name: "ButtonsEx",
    component: ButtonsEx,
  },
  {
    //calendars
    path: "/calendarsEx",
    name: "CalendarsEx",
    component: CalendarsEx,
  },
  {
    //cards
    path: "/cardsEx",
    name: "CardsEx",
    component: CardsEx,
  },
  {
    //carousels
    path: "/carouselsEx",
    name: "CarouselsEx",
    component: CarouselsEx,
  },
  {
    //chips
    path: "/chipsEx",
    name: "ChipsEx",
    component: ChipsEx,
  },
  {
    //dialogs
    path: "/dialogsEx",
    name: "DialogsEx",
    component: DialogsEx,
  },
  {
    //dividers
    path: "/dividersEx",
    name: "DividersEx",
    component: DividersEx,
  },
  {
    //expansion panels
    path: "/expansionPanelsEx",
    name: "ExpansionPanelsEx",
    component: ExpansionPanelsEx,
  },
  {
    //footers
    path: "/footersEx",
    name: "FootersEx",
    component: FootersEx,
  },
  {
    //auto completes
    path: "/autoCompletesEx",
    name: "AutoCompletesEx",
    component: AutoCompletesEx,
  },
  {
    //checkboxes
    path: "/checkboxesEx",
    name: "CheckboxesEx",
    component: CheckboxesEx,
  },
  {
    //file inputs
    path: "/fileInputsEx",
    name: "FileInputsEx",
    component: FileInputsEx,
  },
  {
    //forms
    path: "/formsEx",
    name: "FormsEx",
    component: FormsEx,
  },
  {
    //radio buttons
    path: "/radioButtonsEx",
    name: "RadioButtonsEx",
    component: RadioButtonsEx,
  },
  {
    //range sliders
    path: "/rangeSlidersEx",
    name: "RangeSlidersEx",
    component: RangeSlidersEx,
  },
  {
    //selects
    path: "/selectsEx",
    name: "SelectsEx",
    component: SelectsEx,
  },
  {
    //switches
    path: "/switchesEx",
    name: "SwitchesEx",
    component: SwitchesEx,
  },
  {
    //textareas
    path: "/textAreasEx",
    name: "TextAreasEx",
    component: TextAreasEx,
  },
  {
    //grid system
    path: "/gridSystemEx",
    name: "GridSystemEx",
    component: GridSystemEx,
  },
  {
    //hover
    path: "/hoverEx",
    name: "HoverEx",
    component: HoverEx,
  },
  {
    //images
    path: "/imagesEx",
    name: "ImagesEx",
    component: ImagesEx,
  },
  {
    //lists
    path: "/listsEx",
    name: "ListsEx",
    component: ListsEx,
  },
  {
    //clone
    path: "/sirteamPrac",
    name: "SirteamPrac",
    component: SirteamPrac,
  },
  {
    //overlays
    path: "/overlaysEx",
    name: "OverlaysEx",
    component: OverlaysEx,
  },
  {
    //pagination
    path: "/paginationEx",
    name: "PaginationEx",
    component: PaginationEx,
  },
  {
    //color pickers
    path: "/colorPickersEx",
    name: "ColorPickersEx",
    component: ColorPickersEx,
  },
  {
    //date pickers
    path: "/datePickersEx",
    name: "DatePickersEx",
    component: DatePickersEx,
  },
  {
    //time pickers
    path: "/timePickersEx",
    name: "TimePickersEx",
    component: TimePickersEx,
  },
  {
    //ratings
    path: "/ratingsEx",
    name: "/RatingsEx",
    component: RatingsEx,
  },
  {
    //sheets
    path: "/sheetsEx",
    name: "SheetsEx",
    component: SheetsEx,
  },
  {
    //data iterators
    path: "/dataIteratorsEx",
    name: "DataIteratorsEx",
    component: DataIteratorsEx,
  },
  {
    //simple tables
    path: "/simpleTablesEx",
    name: "SimpleTablesEx",
    component: SimpleTablesEx,
  },
  {
    //data tables
    path: "/dataTablesEx",
    name: "DataTablesEx",
    component: DataTablesEx,
  },
  {
    //tabs
    path: "/tabsEx",
    name: "TabsEx",
    component: TabsEx,
  },
  {
    //tooltips
    path: "/tooltipsEx",
    name: "TooltipsEx",
    component: TooltipsEx,
  },
  {
    //treeview
    path: "/treeviewEx",
    name: "TreeviewEx",
    component: TreeviewEx,
  },
  {
    //virtual scroller
    path: "/virtualScrollerEx",
    name: "VirtualScrollerEx",
    component: VirtualScrollerEx,
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
