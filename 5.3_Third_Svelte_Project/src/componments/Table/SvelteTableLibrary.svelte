<script>

    export let dataRows;
    import SvelteTable from "svelte-table";

    const columns = [
      {
    key: "avatar",
    title: "AVATAR",
    value: v => v.avatar,
    sortable: false,
    headerClass: "text-left",
  },
  {
    key: "name",
    title: "NAME",
    value: v => v.name,
    sortable: true,
    filterOptions: rows => {
      // use first letter of name to generate filter
      let letrs = {};
      rows.forEach(row => {
        let letr = row.name.charAt(0);
        if (letrs[letr] === undefined)
          letrs[letr] = {
            name: `${letr.toUpperCase()}`,
            value: letr.toLowerCase(),
          };
      });
      // fix order
      letrs = Object.entries(letrs)
        .sort()
        .reduce((o, [k, v]) => ((o[k] = v), o), {});
      return Object.values(letrs);
    },
    filterValue: v => v.name.charAt(0).toLowerCase(),
  },
  {
    key: "email",
    title: "EMAIL",
    value: v => v.email,
    sortable: true,
    filterValue: v => v.email.charAt(0).toLowerCase(),
  },
  {
    key: "music",
    title: "MUSIC",
    value: v => v.music,
    renderValue: v => v.music.charAt(0).toUpperCase() + v.music.substring(1), // capitalize
    sortable: false,
  },
    ];
  </script>
  
  <SvelteTable columns="{columns}" rows="{dataRows}"></SvelteTable>

