import { CheckCircle2, Mail, FileText, User, Plus } from "lucide-react";

type PrajolFlightDeal = {
  id: number;
  deal: string;
  phone: string;
  departureCity: string;
  destinationCity: string;
  travellingDate: string;
  returnDate?: string;
  assigned: { name: string; avatar: string };
  qualityEmail: boolean;
  noOfPax: number;
  sellingPrice: number;
  purchasePrice: number;
  margin: number;
  totalSales: number;
  totalPurchase: number;
  profit: number;
  allPassengersName: string[];
  email: string;
  customerTypes: string;
  createInvoice: boolean;
  visaTypes: string;
  creationLog: { date: string; creator: string; avatar: string };
};

const DEALS: PrajolFlightDeal[] = [
  {
    id: 1,
    deal: "Sailung",
    phone: "+977 985 1120717",
    departureCity: "Kathmandu, Nepal",
    destinationCity: "Kuching International Airport",
    travellingDate: "Nov 6, 2025",
    returnDate: "Nov 10, 2025",
    assigned: { name: "Sudip Khanal", avatar: "https://i.pravatar.cc/150?u=sudip" },
    qualityEmail: true,
    noOfPax: 2,
    sellingPrice: 850,
    purchasePrice: 720,
    margin: 15.3,
    totalSales: 1700,
    totalPurchase: 1440,
    profit: 260,
    allPassengersName: ["John Doe", "Jane Doe"],
    email: "john.doe@example.com",
    customerTypes: "Individual",
    createInvoice: false,
    visaTypes: "Tourist Visa",
    creationLog: { date: "Oct 25, 2025", creator: "System", avatar: "https://i.pravatar.cc/150?u=creator" },
  },
  {
    id: 2,
    deal: "Sirakhawa",
    phone: "+977 984 1234567",
    departureCity: "Kathmandu, Nepal",
    destinationCity: "Haneda Airport (HND)",
    travellingDate: "Nov 5, 2025",
    assigned: { name: "Prajol Raut", avatar: "https://i.pravatar.cc/150?u=prajol" },
    qualityEmail: true,
    noOfPax: 1,
    sellingPrice: 1200,
    purchasePrice: 1050,
    margin: 12.5,
    totalSales: 1200,
    totalPurchase: 1050,
    profit: 150,
    allPassengersName: ["Sarah Smith"],
    email: "sarah.smith@example.com",
    customerTypes: "Individual",
    createInvoice: true,
    visaTypes: "Business Visa",
    creationLog: { date: "Oct 20, 2025", creator: "Admin", avatar: "https://i.pravatar.cc/150?u=admin" },
  },
];

const PrajwolFlights = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <h1 className="text-2xl font-semibold text-gray-900">Prajol Flights</h1>
        </div>

        {/* Won Deal Table */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 group">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-medium text-green-600">✓ Won Deal</h2>
            <span className="text-gray-400 text-sm opacity-0 group-hover:opacity-100">
              {DEALS.length} items
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-x-auto">
            <div className="min-w-[2000px]">
              {/* Header */}
              <div className="flex border-b border-gray-200 bg-gray-50 sticky top-0 z-20">
                <div className="w-12 border-r border-gray-200 flex items-center justify-center p-2 sticky left-0 bg-gray-50">
                  <div className="w-4 h-4 border border-gray-300 rounded bg-white"></div>
                </div>

                {/* Column Headers */}
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Deal</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Assigned</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Issued Date</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Payment Risk</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Stage</div>
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Departure City</div>
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Destination City</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Types of Visas</div>
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Company</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Tickets Status</div>
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Issued From Passport</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Airlines</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Payment Date</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Ticket</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Galileo</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Sabre</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Amadeus</div>
                <div className="w-[90px] p-2 text-xs font-semibold text-gray-700 border-r">Pax Size</div>
                <div className="w-[110px] p-2 text-xs font-semibold text-gray-700 border-r">Selling Price</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Purchase Price</div>
                <div className="w-[110px] p-2 text-xs font-semibold text-gray-700 border-r">Total Sales</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Total Purchase</div>
                <div className="w-[90px] p-2 text-xs font-semibold text-gray-700 border-r">Margin %</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Profit</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Departure Date</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Return Date</div>
                <div className="w-[180px] p-2 text-xs font-semibold text-gray-700 border-r">All Passengers Name</div>
                <div className="w-[130px] p-2 text-xs font-semibold text-gray-700 border-r">Phone</div>
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Email</div>
                <div className="w-[200px] p-2 text-xs font-semibold text-gray-700 border-r">Email Body</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Client Type</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Qualify Email</div>
                <div className="w-[100px] p-2 text-xs font-semibold text-gray-700 border-r">Button</div>
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Last Updated</div>
                <div className="w-[150px] p-2 text-xs font-semibold text-gray-700 border-r">Creation Log</div>
                <div className="w-[120px] p-2 text-xs font-semibold text-gray-700 border-r">Country</div>
              </div>

              {/* Rows */}
              {DEALS.map((deal) => (
                <div key={deal.id} className="flex border-b border-gray-200 hover:bg-gray-50 group">
                  <div className="w-12 border-r border-gray-200 flex items-center justify-center p-2 sticky left-0 bg-white">
                    <div className="w-4 h-4 border border-gray-300 rounded hover:border-blue-500 cursor-pointer"></div>
                  </div>

                  <div className="w-[150px] p-2 text-xs">{deal.deal}</div>
                  <div className="w-[130px] p-2 text-xs">{deal.phone}</div>
                  <div className="w-[150px] p-2 text-xs">{deal.departureCity}</div>
                  <div className="w-[150px] p-2 text-xs">{deal.destinationCity}</div>
                  <div className="w-[120px] p-2 text-xs">{deal.travellingDate}</div>
                  <div className="w-[120px] p-2 text-xs">{deal.returnDate || "-"}</div>

                  <div className="w-[120px] p-2 flex items-center gap-2">
                    <img src={deal.assigned.avatar} className="w-6 h-6 rounded-full" />
                    <span className="text-xs">{deal.assigned.name}</span>
                  </div>

                  <div className="w-[100px] p-2">
                    {deal.qualityEmail ? (
                      <button className="bg-green-500 text-white px-2 py-1 text-xs rounded flex items-center gap-1">
                        <Mail className="w-3 h-3" /> Send
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">-</span>
                    )}
                  </div>

                  <div className="w-[90px] p-2 text-xs text-center">{deal.noOfPax}</div>
                  <div className="w-[110px] p-2 text-xs">${deal.sellingPrice}</div>
                  <div className="w-[120px] p-2 text-xs">${deal.purchasePrice}</div>
                  <div className="w-[90px] p-2 text-xs text-green-600">{deal.margin}%</div>
                  <div className="w-[110px] p-2 text-xs">${deal.totalSales}</div>
                  <div className="w-[120px] p-2 text-xs">${deal.totalPurchase}</div>
                  <div className="w-[100px] p-2 text-xs text-green-600 font-semibold">${deal.profit}</div>

                  <div className="w-[180px] p-2 text-xs">{deal.allPassengersName.join(", ")}</div>
                  <div className="w-[150px] p-2 text-xs text-blue-600">{deal.email}</div>

                  <div className="w-[120px] p-2 text-xs">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {deal.customerTypes}
                    </span>
                  </div>

                  <div className="w-[110px] p-2">
                    {deal.createInvoice ? (
                      <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded flex items-center gap-1">
                        <FileText className="w-3 h-3" /> Invoice
                      </button>
                    ) : (
                      <button className="text-xs text-gray-400 hover:text-blue-600">
                        Create
                      </button>
                    )}
                  </div>

                  <div className="w-[100px] p-2">
                    <button className="text-xs text-blue-600 flex items-center gap-1">
                      <User className="w-3 h-3" /> Assign
                    </button>
                  </div>

                  <div className="w-[120px] p-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                      {deal.visaTypes}
                    </span>
                  </div>

                  <div className="w-[150px] p-2 flex items-center gap-2">
                    <img src={deal.creationLog.avatar} className="w-5 h-5 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-xs">{deal.creationLog.creator}</span>
                      <span className="text-xs text-gray-500">{deal.creationLog.date}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add row */}
              <div className="flex h-9 border-t border-gray-200 hover:bg-gray-50 cursor-pointer">
                <div className="w-12 border-r bg-white"></div>
                <div className="w-full flex items-center px-3 text-sm text-gray-500">
                  <Plus className="w-4 h-4 mr-2" /> Add deal
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrajwolFlights;
